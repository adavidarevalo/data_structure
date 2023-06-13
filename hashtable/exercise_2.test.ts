import indexOfSum from "./exercise_2";

describe("indexOfSum", () => {
  it("should return the index array of the sum", () => {
    expect(indexOfSum([9, 2, 5, 6], 7)).toEqual([1, 2]);
  });
  it("should return null, cannot have two number that sum the target", () => {
    expect(indexOfSum([9, 2, 5, 6], 100)).toEqual(null);
  });
});
