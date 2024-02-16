import { render, screen } from "@testing-library/react";
import { BlockFooter } from ".";

const noOfTransactions = 15;

it("should render number of tx", () => {
  render(<BlockFooter noOfTransactions={noOfTransactions} />);

  expect(screen.getByTestId("footer-tx")).toHaveTextContent(
    `${noOfTransactions} MORE TX`
  );
});

it("should render a button", () => {
  render(<BlockFooter noOfTransactions={noOfTransactions} />);

  expect(screen.getByRole("button")).toBeInTheDocument;
});
