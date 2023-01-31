const removeElement = require("./index");

describe("removeElement", () => {
  test("should return an integer", () => {
    // Arrange
    const nums = [3, 2, 2, 3];
    const val = 3;
    // Act
    const result = removeElement(nums, val);
    // Assert
    expect(typeof result).toBe("number");
  });

  test("should return the number of non-val values & move those to the front of the array", () => {
    // Arrange
    const nums = [3, 2, 2, 3];
    const val = 3;
    // Act
    const result = removeElement(nums, val);
    // Assert
    expect(result).toBe(2);
  });

  test("should return the number of non-val values & move those to the front of the array", () => {
    // Arrange
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    // Act
    const result = removeElement(nums, val);
    // Assert
    expect(result).toBe(5);
  });
});
