import { render, screen } from "@testing-library/react";
import Explorer from "./page";

jest.mock("../actions", () => ({
  getLatestBlock: jest.fn().mockReturnValue('1234'),
  getGasPrice: jest.fn().mockReturnValue(24),
}));

it("should render the header", async () => {
  const Page = await Explorer();
  render(Page);

  expect(screen.getByTestId("explorer-header")).toBeInTheDocument();
});
