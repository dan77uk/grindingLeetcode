const removeDuplicates = require("./index");

describe("Remove Duplicates from Sorted Array", () => {
  test("should return an integer when passed a non empty array", () => {
    // Arrange
    const array = [1, 2, 3];
    // Act
    const result = removeDuplicates(array);
    // Assert
    expect(typeof result).toBe("number");
  });
});
