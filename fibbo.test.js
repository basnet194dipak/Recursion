import { fibbonachi } from "./fibbo.js";

test("fibbonachi(8) prints the first 9 Fibonacci numbers", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  fibbonachi(8);

  const printedNumbers = consoleSpy.mock.calls
    .map(([value]) => value)
    .filter((value) => typeof value === "number");

  expect(printedNumbers).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);

  consoleSpy.mockRestore();
});
