export type IBlock =
  | {
      hash: string;
      number: string;
      timestamp: string;
      transactions: ITransaction[];
    }
  | {
      hash: string;
      number: string;
      timestamp: string;
      transactions: string[];
    };

export interface ITransaction {
  hash: string;
  from: string;
  to: string;
  ethValue: string;
  dollarValue: string;
  exchangeRate: string;
}
