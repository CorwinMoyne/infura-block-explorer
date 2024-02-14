import { Route } from "@/constants";
import { render, screen } from "@testing-library/react";
import { Navbar } from "..";

it("should render a logo", () => {
  render(<Navbar />)

  expect(screen.getByTestId("nav-logo")).toBeInTheDocument();
});

it("should render 3 nav links", () => {
  render(<Navbar />)

  expect(screen.getAllByTestId("nav-link")).toHaveLength(3);
});

it("should render a dashboard link", () => {
  render(<Navbar />)

  expect(screen.getAllByTestId("nav-link")[0]).toHaveAttribute('href', Route.Dashboard);
});

it("should render a projects link", () => {
  render(<Navbar />)

  expect(screen.getAllByTestId("nav-link")[1]).toHaveAttribute('href', Route.Projects);
});

it("should render an explorer link", () => {
  render(<Navbar />)

  expect(screen.getAllByTestId("nav-link")[2]).toHaveAttribute('href', Route.Explorer);
});
