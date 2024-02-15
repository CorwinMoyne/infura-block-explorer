"use server";

import { Block } from "@/types";
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
