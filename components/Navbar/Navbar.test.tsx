import { Route } from "@/constants";
import { render, screen } from "@testing-library/react";
import { Navbar } from "..";

it("should render a logo", () => {
  render(<Navbar />)

  expect(screen.getByTestId("nav-logo")).toBeInTheDocument();
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

it("should render a settings link", () => {
  render(<Navbar />)

  expect(screen.getAllByTestId("nav-link")[3]).toHaveAttribute('href', Route.Settings);
});

it("should render a logout button", () => {
  render(<Navbar />)

  expect(screen.getByTestId("power-btn")).toBeInTheDocument();
});
