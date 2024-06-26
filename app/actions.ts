"use server";

import { INITIAL_NUMBER_OF_BLOCKS } from "@/constants";
import { IBlock, ITransaction } from "@/types";
import { Web3 } from "web3";

const provider = `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);

/**
 * Formats the blocks to the correct structure
 *
 * @param blocks The blocks to format
 * @returns IBlock[]
 */
function formatBlocks(blocks: IBlock[]): IBlock[] {
  return blocks.map((block) => {
    return {
      hash: block.hash,
      number: block.number.toString(),
      transactions: (block.transactions as string[]).map(
        (transaction: string) => {
          return {
            hash: transaction,
            from: "",
            to: "",
            ethValue: "",
            dollarValue: "",
            exchangeRate: "",
          };
        }
      ),
      timestamp: block.timestamp.toString(),
    };
  });
}

/**
 * Returns the latest block number
 *
 * @returns string | undefined
 */
export async function getLatestBlock() {
  try {
    return (await web3.eth.getBlockNumber()).toString();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Returns the gas price
 *
 * @returns number | undefined
 */
export async function getGasPrice() {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    return Math.round(Number(web3.utils.fromWei(gasPrice, "gwei")));
  } catch (error) {
    console.error(error);
  }
}

/**
 * Returns a list of blocks limited in length
 *
 * @returns Promise<Block[]>
 */
export async function getBlocks(last?: string): Promise<IBlock[]> {
  const latestBlock = last ? Number(last) - 1 : await web3.eth.getBlockNumber();
  const blocks: IBlock[] = [];

  for (var i = 0; i < INITIAL_NUMBER_OF_BLOCKS; i++) {
    const block = (await web3.eth.getBlock(
      Number(latestBlock) - i
    )) as unknown as IBlock;
    blocks.push(block);
  }

  return formatBlocks(blocks);
}

/**
 * Returns the latest blocks not already returned
 *
 * @returns Promise<Block[]>
 */
export async function getLatestBlocks(
  newestBlockNumber: string
): Promise<IBlock[]> {
  const latestBlock = await web3.eth.getBlockNumber();
  const blocks: IBlock[] = [];

  for (var i = 0; i < Number(latestBlock) - Number(newestBlockNumber); i++) {
    const block = (await web3.eth.getBlock(
      Number(latestBlock) - i
    )) as unknown as IBlock;
    blocks.push(block);
  }

  return formatBlocks(blocks);
}

/**
 * Returns the transaction data
 *
 * @param transactionHash The transaction hash
 * @returns ITransaction | undefined
 */
export async function getTransactionData(
  transactionHash: string | undefined
): Promise<ITransaction | undefined> {
  if (!transactionHash) {
    return;
  }

  const transaction = await web3.eth.getTransaction(transactionHash);
  const ethValue = web3.utils.fromWei(transaction.value, "ether");
  const { hash, from, to } = transaction;

  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${process.env.CRYPTO_COMPARE_API_KEY}`
  );

  const { USD } = await response.json();
  const dollarValue = (USD * Number(ethValue)).toFixed(2);

  return {
    hash,
    from,
    to: to as string,
    ethValue: Number(ethValue).toFixed(3),
    dollarValue,
    exchangeRate: USD,
  };
}
