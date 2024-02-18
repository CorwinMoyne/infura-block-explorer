import { mockBlocks } from "@/mocks/blocks";
import StoreProvider from "@/providers/storeProvider";
import { render, screen } from "@testing-library/react";
import { BlocksGrid } from ".";

jest.mock("../../../actions", () => ({
  getBlocks: jest.fn().mockReturnValue(mockBlocks),
}));

it("should render a grid of blocks", () => {
  render(
    <StoreProvider>
      <BlocksGrid initialBlocks={mockBlocks} />
    </StoreProvider>
  );

  expect(screen.getAllByTestId("block")).toHaveLength(mockBlocks.length);
});

it("should render a load more btn", () => {
  render(
    <StoreProvider>
      <BlocksGrid initialBlocks={mockBlocks} />
    </StoreProvider>
  );

  expect(screen.getByRole('button')).toHaveTextContent('Load More');
});
