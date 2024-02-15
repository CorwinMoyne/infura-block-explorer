import { mockBlocks } from "@/mocks/blocks";
import { render, screen } from "@testing-library/react";
import { BlockHeader } from ".";

jest.mock("../../../../../utils", () => ({
  durationFromDate: jest.fn().mockReturnValue('5h'),
  toCommaSeparated: jest.fn().mockReturnValue('19,232,714')
}))

it("should render the block number", () => {
  render(
    <BlockHeader
      blockNumber={mockBlocks[0].number}
      noOfTransactions={mockBlocks[0].transactions.length}
      timestamp={mockBlocks[0].timestamp}
    />
  );

  expect(screen.getByText("#19,232,714")).toBeInTheDocument();
  expect(screen.getByTestId("block-header-transactions")).toHaveTextContent(
    `${mockBlocks[0].transactions.length}TXs`
  );
  expect(screen.getByTestId("block-header-timestamp")).toHaveTextContent(
    "mined5h ago"
  );
});
