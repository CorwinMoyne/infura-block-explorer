import { mockBlocks, mockTransaction } from "@/mocks/blocks";
import { render, screen } from "@testing-library/react";
import { BlockTransactions } from ".";

jest.mock("../../../../actions", () => ({
  getTransactionData: jest.fn().mockReturnValue(mockTransaction),
}));

it("should render a grid of transactions", () => {
  render(<BlockTransactions transactions={mockBlocks[0].transactions} />);

  expect(screen.getAllByTestId("block-transaction")).toHaveLength(mockBlocks[0].transactions.length)
});
