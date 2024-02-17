import { cStatusType } from "@/constants";
import { IBlock } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  },
});

export const { setBlocks, unshiftBlocks, pushBlocks } = slice.actions;

export const selectBlocks = (state: RootState) => state.blocks.entries;

export default slice.reducer;
