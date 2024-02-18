import { render, screen } from "@testing-library/react";
import { HeaderData } from ".";

it("should render a small header data", () => {
  render(<HeaderData size="small">Test</HeaderData>);

  expect(screen.getByTestId("header-data")).toHaveClass('text-sm');
});

it("should render a large header data", () => {
  render(<HeaderData>Test</HeaderData>);

  expect(screen.getByTestId("header-data")).toHaveClass('text-4xl');
});
