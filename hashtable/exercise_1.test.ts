import IsUnique from "./exercise_1";

describe("IsUnique", () => {
  it("returns true when all characters are unique", () => {
    expect(IsUnique("abcde")).toBe(true);
  });

  it("returns false when there are duplicate characters", () => {
    expect(IsUnique("abcded")).toBe(false);
  });

  it("returns true when all characters are unique with uppercase words", () => {
    expect(IsUnique("aAbBcCdDeE")).toBe(true);
  });
});
