import { mockBlocks, mockTransaction } from "@/mocks/blocks";
import { currencyFormatter } from "@/utils/currencyFormatter/currencyFormatter";
import { fireEvent, render, screen } from "@testing-library/react";
import { BlockTransaction } from ".";

jest.mock("../../../../../actions", () => ({
  getTransactionData: jest.fn().mockReturnValue(mockTransaction),
}));

jest.mock("../../../../../../hooks/useDebounce", () => ({
  useDebounce: (value: any) => value,
}));

it("should render a transaction", () => {
  render(<BlockTransaction hash={mockBlocks[0].hash} />);

  expect(screen.getByTestId("block-transaction")).toBeInTheDocument();
  expect(screen.getByTestId("block-transaction")).toHaveClass(
    "w-4 h-4 bg-kimberly-400"
  );
});

it("should render a popover on hover", async () => {
  render(<BlockTransaction hash={mockBlocks[0].hash} />);

  fireEvent.mouseOver(screen.getByTestId("block-transaction"));

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
