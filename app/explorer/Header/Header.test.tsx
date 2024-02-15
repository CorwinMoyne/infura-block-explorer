import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("../../actions", () => ({
  getLatestBlock: jest.fn().mockReturnValue("19229811"),
  getGasPrice: jest.fn().mockReturnValue(31),
}));

it("should render the current block number", async () => {
  const Component = await Header();
  render(Component);

  expect(screen.getByText("current block")).toBeInTheDocument();
  expect(screen.getByText("19,229,811")).toBeInTheDocument();
});

it("should render the average gas price", async () => {
  const Component = await Header();
  render(Component);

  expect(screen.getByText("average gas price")).toBeInTheDocument();
  expect(screen.getByTestId("averageGasPrice").textContent).toBe("31gwei");
});

it("should render the average block size", async () => {
  const Component = await Header();
  render(Component);

  expect(screen.getByText("average block size")).toBeInTheDocument();
  expect(screen.getByTestId("averageBlockSize").textContent).toBe("8.2mgas");
});

it("should render the average block fullness", async () => {
  const Component = await Header();
  render(Component);

  expect(screen.getByText("average block fullness")).toBeInTheDocument();
  expect(screen.getByText("88%")).toBeInTheDocument();
});
