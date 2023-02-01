const getConcatenation = require("./index");

describe("getConcatenation", () => {
  it("should return an array", () => {
    expect(Array.isArray(getConcatenation())).toBe(true);
  });

  it("should return an array twice the length of the input array", () => {
    // Arrange
    const input = [1, 2, 1];
    // Act
    const result = getConcatenation(input);
    // Assert
    expect(result).toHaveLength(input.length * 2);
  });

  it("should repeat the input array", () => {
    // Arrange
    const input = [1, 2, 1];
    // Act
    const result = getConcatenation(input);
    // Assert
    expect(result).toEqual([1, 2, 1, 1, 2, 1]);

    // Arrange
    const input1 = [1, 2, 1, 6, 7, 9, 8];
    // Act
    const result1 = getConcatenation(input1);
    // Assert
    expect(result1).toEqual([1, 2, 1, 6, 7, 9, 8, 1, 2, 1, 6, 7, 9, 8]);
  });
});
