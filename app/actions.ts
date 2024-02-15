"use server";

import { Block, Transaction } from "@/types";
import { Web3 } from "web3";

const provider = `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);

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
export async function getBlocks() {
  const latestBlock = await web3.eth.getBlockNumber();
  const blocks: Block[] = [];

  for (var i = 0; i < 1; i++) {
    const block = (await web3.eth.getBlock(
      Number(latestBlock) - i
    )) as unknown as Block;
    blocks.push(block);
  }

  return blocks;
}

export async function getTransactionData(hash: string | undefined): Promise<Transaction | undefined> {
  if(!hash) {
    return;
  }
  const transaction = await web3.eth.getTransaction(hash);
  const ethValue = web3.utils.fromWei(transaction.value, "ether");

  console.log('ethValue', ethValue);
  

  const {from, to} = transaction;
  // console.log("eth", eth);

  const response = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=176883d9231478ea2717439a9b0722905eb7ad512bc5dea7458cb5adebcefc17"
  );
  const { USD } = await response.json();

  // console.log('transaction', transaction);
  

  console.log("usd", USD);

  const dollarValue = (USD * Number(ethValue)).toFixed(2);

  console.log("dollars", (USD * Number(ethValue)).toFixed(2));

  // from

  return {
    from,
    to: to as string,
    ethValue: Math.round(Number(ethValue)).toFixed(2),
    dollarValue,
    exchangeRate: USD
  };
}
