import search from "./index";

describe("search in rotated sorted array", () => {
  test("should find target in rotated array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test("should handle edge cases", () => {
    expect(search([], 5)).toBe(-1);
    expect(search([1], 1)).toBe(0);
    expect(search([1], 0)).toBe(-1);
  });

  test("should find elements in different rotation positions", () => {
    expect(search([3, 1, 2], 1)).toBe(1);
    expect(search([5, 1, 2, 3, 4], 1)).toBe(1);
    expect(search([5, 6, 7, 1, 2, 3, 4], 6)).toBe(1);
  });

  test("should handle large arrays", () => {
    expect(search([5, 1, 3], 3)).toBe(2);
  });
});
