export interface Block {
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
  number: bigint;
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

export interface Transaction {
  from: string;
  to: string;
  ethValue: string;
  dollarValue: string;
  exchangeRate: string;
}