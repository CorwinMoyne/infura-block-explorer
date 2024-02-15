import { toCommaSeparated } from "..";

it("should return the value comma separated", () => {
  const result = toCommaSeparated("19233416");

  expect(result).toBe("19,233,416");
});
