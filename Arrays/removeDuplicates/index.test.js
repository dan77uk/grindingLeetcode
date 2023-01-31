const removeDuplicates = require("./index");

describe("Remove Duplicates from Sorted Array", () => {
  test("should return 0 when passed an empty array", () => {
    // Arrange
    const array = [];
    // Act
    const result = removeDuplicates(array);
    // Assert
    expect(result).toBe(0);
  });

  test("should return an integer of the same length as the input array when there are no duplicates", () => {
    // Arrange
    const array = [1, 2, 3];
    // Act
    const result = removeDuplicates(array);
    // Assert
    expect(result).toBe(3);
  });

  test("should return an integer of 3 when passed and array of 4 integers containing one duplicate", () => {
    // Arrange
    const array = [1, 2, 3, 3];
    // Act
    const result = removeDuplicates(array);
    // Assert
    expect(result).toBe(3);
  });

  test("should return an integer of 5 when passed and array of 10 integers containing 5 duplicates", () => {
    // Arrange
    const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    // Act
    const result = removeDuplicates(array);
    // Assert
    expect(result).toBe(5);
  });
});
