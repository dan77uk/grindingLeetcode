const validParentheses = require("./validParentheses");

describe("validParentheses", () => {
  test("should return true for valid parentheses", () => {
    const validCases = ["()", "[]", "{}", "({[]})", "({})[]"];

    validCases.forEach((s) => {
      expect(validParentheses(s)).toBe(true);
    });
  });

  test("should return false for invalid parentheses", () => {
    const invalidCases = ["(", ")", "[", "}", "({[})", "{}[)"];

    invalidCases.forEach((s) => {
      expect(validParentheses(s)).toBe(false);
    });
  });

  test("returns true for empty string", () => {
    expect(validParentheses("")).toBe(true);
  });

  test("should return true for balanced parentheses of different length", () => {
    expect(validParentheses("(((())))")).toBe(true);
    expect(validParentheses("{[][]}")).toBe(true);
    expect(
      validParentheses("((((((((((((((((((((((()))))))))))))))))))))))")
    ).toBe(true);
  });

  test("should return false for unbalanced parentheses of different length", () => {
    expect(
      validParentheses("((((((((((((((((((((((())))))))))))))))))))")
    ).toBe(false);
    expect(validParentheses("{[][]}[")).toBe(false);
    expect(validParentheses("((")).toBe(false);
  });
});
