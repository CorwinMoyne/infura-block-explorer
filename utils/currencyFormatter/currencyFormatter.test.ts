import { currencyFormatter } from "./currencyFormatter";

it("should return the value formatted to dollars", () => {
  const result = currencyFormatter.format(22.99);

  expect(result).toBe("$22.99");
});
