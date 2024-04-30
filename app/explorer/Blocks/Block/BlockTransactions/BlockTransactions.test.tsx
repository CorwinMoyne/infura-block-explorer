import { mockBlocks, mockTransaction } from "@/mocks/blocks";
import StoreProvider from "@/providers/storeProvider";
import { ITransaction } from "@/types";
import { render, screen } from "@testing-library/react";
import { BlockTransactions } from ".";

jest.mock("../../../../actions", () => ({
  getTransactionData: jest.fn().mockReturnValue(mockTransaction),
}));

it("should render a grid of transactions", () => {
  render(
    <StoreProvider>
      <BlockTransactions
        blockHash={mockBlocks[0].hash}
        transactions={mockBlocks[0].transactions as ITransaction[]}
      />
    </StoreProvider>
  );

  expect(screen.getAllByTestId("block-transaction")).toHaveLength(
    mockBlocks[0].transactions.length
  );
});
