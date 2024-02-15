import { render, screen } from "@testing-library/react";
import { Header } from ".";

const currentBlockNumber = "19229811";
const averageGasPrice = 31;
const averageBlockSize = "8.2mgas";
const averageBlockFullness = "88%";

it("should render the current block number", () => {
  render(<Header currentBlockNumber={currentBlockNumber} averageGasPrice={averageGasPrice} />);

  expect(screen.getByText("current block")).toBeInTheDocument();
  expect(screen.getByText("19,229,811")).toBeInTheDocument();
});

it("should render the average gas price", () => {
  render(<Header currentBlockNumber={currentBlockNumber} averageGasPrice={averageGasPrice} />);

  expect(screen.getByText("average gas price")).toBeInTheDocument();
  expect(screen.getByTestId('averageGasPrice').textContent).toBe(`${averageGasPrice}gwei`);
});

it("should render the average block size", () => {
  render(<Header currentBlockNumber={currentBlockNumber} averageGasPrice={averageGasPrice} />);

  expect(screen.getByText("average block size")).toBeInTheDocument();
  expect(screen.getByTestId('averageBlockSize').textContent).toBe(averageBlockSize);
});

it("should render the average block fullness", () => {
  render(<Header currentBlockNumber={currentBlockNumber} averageGasPrice={averageGasPrice} />);

  expect(screen.getByText("average block fullness")).toBeInTheDocument();
  expect(screen.getByText(averageBlockFullness)).toBeInTheDocument();
});
