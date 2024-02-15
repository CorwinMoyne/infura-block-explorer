import { durationFromDate } from "..";

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2024-02-15T12:32:39"));
});

it("should return the number of seconds", () => {
  const result = durationFromDate("1708000320");
  expect(result).toBe("39s");
});

it("should return the number of minutes", () => {
  const result = durationFromDate("1707997479");
  expect(result).toBe("48m");
});

it("should return the number of hours", () => {
  const result = durationFromDate("1707996720");
  expect(result).toBe("1h");
});

it("should return the number of days", () => {
  const result = durationFromDate("1707910320");
  expect(result).toBe("1d");
});

it("should return the number of months", () => {
  const result = durationFromDate("1705231920");
  expect(result).toBe("1m");
});

it("should return the number of years", () => {
  const result = durationFromDate("1610623920");
  expect(result).toBe("3y");
});
