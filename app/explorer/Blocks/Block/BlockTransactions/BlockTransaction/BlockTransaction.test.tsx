import { mockTransaction } from "@/mocks/blocks";
import StoreProvider from "@/providers/storeProvider";
import { ITransaction } from "@/types";
import { currencyFormatter } from "@/utils/currencyFormatter/currencyFormatter";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BlockTransaction } from ".";

jest.mock("../../../../../actions", () => ({
  getTransactionData: jest.fn().mockReturnValue(mockTransaction),
}));

jest.mock("../../../../../../hooks/useDebounce", () => ({
  useDebounce: (value: any) => value,
}));

it("should render a transaction", () => {
  render(
    <StoreProvider>
      <BlockTransaction
        blockHash={mockTransaction.hash}
        transaction={mockTransaction as ITransaction}
      />
    </StoreProvider>
  );

  expect(screen.getByTestId("block-transaction")).toBeInTheDocument();
  expect(screen.getByTestId("block-transaction")).toHaveClass(
    "w-4 h-4 bg-kimberly-200"
  );
});

it("should render a popover on hover", async () => {
  render(
    <StoreProvider>
      <BlockTransaction
        blockHash={mockTransaction.hash}
        transaction={mockTransaction as ITransaction}
      />
    </StoreProvider>
  );

  act(() => fireEvent.mouseOver(screen.getByTestId("block-transaction")));

  expect(await screen.findByTestId("popover")).toBeInTheDocument();

  // FROM
  expect(await screen.findByText("FROM")).toBeInTheDocument();
  expect(await screen.findByText(mockTransaction.from)).toBeInTheDocument();

  // TO
  expect(await screen.findByText("TO")).toBeInTheDocument();
  expect(await screen.findByText(mockTransaction.to)).toBeInTheDocument();

  // ETH
  expect(await screen.findByText("VALUE")).toBeInTheDocument();
  expect(
    await screen.findByText(`${mockTransaction.ethValue} ETH`)
  ).toBeInTheDocument();

  // Dollars
  expect(
    await screen.findByText(
      currencyFormatter.format(Number(mockTransaction.dollarValue))
    )
  ).toBeInTheDocument();

  // Exchange rate
  expect(
    await screen.findByText(
      currencyFormatter.format(Number(mockTransaction.exchangeRate))
    )
  ).toBeInTheDocument();
});
