import { callc } from "./sum";

describe("my beverage", () => {
  test("is delicious", () => {
    expect(callc(2, 3)).toBe(5);
  });
});
