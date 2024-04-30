import {
  blockWithManyTransactions,
  mockBlocks,
  mockTransaction,
} from "@/mocks/blocks";
import StoreProvider from "@/providers/storeProvider";
import { render, screen } from "@testing-library/react";
import { Block } from ".";

jest.mock("../../../actions", () => ({
  getTransactionData: jest.fn().mockReturnValue(mockTransaction),
}));

it("should render a header", () => {
  render(
    <StoreProvider>
      <Block block={mockBlocks[0]} />
    </StoreProvider>
  );

  expect(screen.getByTestId("block-header")).toBeInTheDocument();
});

it("should render transactions", () => {
  render(
    <StoreProvider>
      <Block block={mockBlocks[0]} />
    </StoreProvider>
  );

  expect(screen.getByTestId("block-transactions")).toBeInTheDocument();
});

it("should render a footer if transactions length is greater than 100", () => {
  render(
    <StoreProvider>
      <Block block={blockWithManyTransactions} />
    </StoreProvider>
  );

  expect(screen.getByTestId("block-footer")).toBeInTheDocument();
});

it("should not render a footer if transactions length is less than 100", () => {
  render(
    <StoreProvider>
      <Block block={mockBlocks[0]} />
    </StoreProvider>
  );

  expect(screen.queryByTestId("block-footer")).not.toBeInTheDocument();
});
