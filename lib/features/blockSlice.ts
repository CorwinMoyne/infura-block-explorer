import { cStatusType } from "@/constants";
import { IBlock, ITransaction } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BlockSliceState {
  entries: IBlock[];
  status: cStatusType;
  fetched: boolean;
  error?: string;
}

const initialState: BlockSliceState = {
  entries: [],
  status: cStatusType.Idle,
  fetched: false,
};

export const slice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setBlocks: (state, action: PayloadAction<IBlock[]>) => {
      state.entries = action.payload;
    },
    unshiftBlocks: (state, action: PayloadAction<IBlock[]>) => {
      const copy = state.entries;
      state.entries = [...action.payload, ...copy];
    },
    pushBlocks: (state, action: PayloadAction<IBlock[]>) => {
      const copy = state.entries;
      state.entries = [...copy, ...action.payload];
    },
    updateTransaction: (
      state,
      action: PayloadAction<{ hash: String; transaction: ITransaction }>
    ) => {
      const copy = state.entries;
      const { from, to, ethValue, dollarValue, exchangeRate } =
        action.payload.transaction;
      copy.map((block) => {
        if (block.hash === action.payload.hash) {
          let foundTransaction = (block.transactions as ITransaction[]).find(
            (transaction) =>
              transaction.hash === action.payload.transaction.hash
          );
          if (foundTransaction) {
            foundTransaction.from = from;
            foundTransaction.to = to;
            foundTransaction.ethValue = ethValue;
            foundTransaction.dollarValue = dollarValue;
            foundTransaction.exchangeRate = exchangeRate;
          }
        }
      });
      state.entries = copy;
    },
  },
});

export const { setBlocks, unshiftBlocks, pushBlocks, updateTransaction } =
  slice.actions;

export const selectBlocks = (state: RootState) => state.blocks.entries;

export default slice.reducer;
