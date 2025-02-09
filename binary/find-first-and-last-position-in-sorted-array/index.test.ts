import searchRange from "./index";

describe("searchRange", () => {
  it("should return the first and last position of the target in the sorted array", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });

  it("should return [-1, -1] if the target is not in the array", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });

  it("should return the first and last position of the target in the sorted array", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });

  it("should return [-1, -1] if the target is not in the array", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
});
