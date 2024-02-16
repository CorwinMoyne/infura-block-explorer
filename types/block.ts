export interface IBlock {
  baseFeePerGas: bigint;
  difficulty: bigint;
  extraData: string;
  gasLimit: bigint;
  gasUsed: bigint;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: bigint;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: bigint;
  stateRoot: string;
  timestamp: bigint;
  totalDifficulty: bigint;
  transactions: string[];
  transactionsRoot: string;
  uncles: any[];
}

export interface ITransaction {
  from: string;
  to: string;
  ethValue: string;
  dollarValue: string;
  exchangeRate: string;
}