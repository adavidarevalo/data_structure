import groupByAnagram from "./exercise_3";

describe("groupByAnagram", () => {
  it("validate anagram group", () => {
    expect(
      groupByAnagram(["saco", "arresto", "programa", "rastreo", "caso"])
    ).toEqual([["saco", "caso"], ["arresto", "rastreo"], ["programa"]]);
  });
});
