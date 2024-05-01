import { mockBlocks } from "@/mocks/blocks";
import StoreProvider from "@/providers/storeProvider";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BlocksGrid } from ".";
import { getBlocks, getLatestBlocks } from "../../../actions";

jest.mock("../../../actions", () => ({
  getBlocks: jest.fn().mockReturnValue(mockBlocks.splice(0, 1)),
  getLatestBlocks: jest.fn().mockReturnValue(mockBlocks.splice(1, 0)),
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

  expect(screen.getByRole("button")).toHaveTextContent("Load More");
});

it("should load more blocks when the load more btn is clicked", async () => {
  render(
    <StoreProvider>
      <BlocksGrid initialBlocks={mockBlocks} />
    </StoreProvider>
  );

  await waitFor(async () => {
    await fireEvent.click(screen.getByRole("button"));
  });

  expect(getBlocks).toHaveBeenCalledWith(mockBlocks[0].number);

  expect(screen.getAllByTestId("block")).toHaveLength(mockBlocks.length * 2);
});

it("should poll for more blocks every 10 seconds", async () => {
  jest.useFakeTimers();

  render(
    <StoreProvider>
      <BlocksGrid initialBlocks={mockBlocks} />
    </StoreProvider>
  );

  act(() => jest.advanceTimersByTime(10000));

  expect(getLatestBlocks).toHaveBeenCalledWith(mockBlocks[0].number);

  await waitFor(() => {
    expect(screen.getAllByTestId("block")).toHaveLength(1);
  });
});
