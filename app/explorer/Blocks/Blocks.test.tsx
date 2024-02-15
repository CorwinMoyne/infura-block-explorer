import { mockBlocks } from "@/mocks/blocks";
import { render, screen } from "@testing-library/react";
import { Blocks } from ".";

jest.mock("../../actions", () => ({
  getBlocks: jest.fn().mockReturnValue(mockBlocks),
}));

it("should render a grid blocks", async () => {
  const Component = await Blocks();

  render(Component);

  expect(screen.getByTestId("explorer-blocks")).toBeInTheDocument();
  expect(screen.getByTestId("explorer-blocks").children).toHaveLength(mockBlocks.length);
});