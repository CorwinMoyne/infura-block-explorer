import { render, screen } from "@testing-library/react";
import { HeaderItem } from ".";

it('should render text and children content', () => {
  render(<HeaderItem text="text">Children</HeaderItem>);

  expect(screen.getByText("text")).toBeInTheDocument();
  expect(screen.getByText("Children")).toBeInTheDocument();
});