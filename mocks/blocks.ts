import { IBlock, ITransaction } from "@/types";

export const mockBlocks: IBlock[] = [
  {
    hash: "0x5e4866ae69b3c13311855188b22a6553dfa39d3fba5706c302d57fc4a6c6657a",
    number: "19232714",
    timestamp: "1707992675",
    transactions: [
      "0x313945989cf301f00855d73a515f8d9f2f48f6fc489e1fd362e523ff094cb0e7",
      "0xa34e0aecacd3623aa0f1ce92cdf9aa08ac0e13807f6bd224e02e721b4bad1098",
    ],
  },
];

export const mockTransaction: ITransaction = {
  hash: "0x5e4866ae69b3c13311855188b22a6553dfa39d3fba5706c302d57fc4a6c6657a",
  from: "0x313945989cf301f00855d73a515f8d9f2f48f6fc489e1fd362e523ff094cb0e7",
  to: "0xa34e0aecacd3623aa0f1ce92cdf9aa08ac0e13807f6bd224e02e721b4bad1098",
  ethValue: "1.2",
  dollarValue: "100",
  exchangeRate: "2500",
};

export const mockTransactions = Array.from({ length: 100 }).map(item => item = "0x5e4866ae69b3c13311855188b22a6553dfa39d3fba5706c302d57fc4a6c6657a");

export const blockWithManyTransactions = {...mockBlocks[0], transactions: [...mockBlocks[0].transactions, ...mockTransactions]};
