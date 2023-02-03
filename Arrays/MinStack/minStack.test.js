const MinStack = require("./minStack");

describe("MinStack", () => {
  it("should return an instance of the MinStack class", () => {
    // Arrange
    const newStack = new MinStack();
    // Assert
    expect(typeof newStack).toBe("object");
  });

  it("should contain an empty array on the stack key on instantiation", () => {
    // Arrange
    const newStack = new MinStack();
    // Assert
    expect(Array.isArray(newStack.stack)).toBe(true);
  });

  it("should add the passed value to stack key array calling the pushValue method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(5);
    // Assert
    expect(newStack.stack).toEqual([5]);
  });

  it("should remove the value from the top of the stack array calling the popValue method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(5);
    newStack.push(10);
    newStack.push(15);
    newStack.pop();
    // Assert
    expect(newStack.stack).toEqual([5, 10]);
  });

  it("should return the top value from the stack when calling the topValue method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(5);
    newStack.push(10);
    newStack.push(15);
    const result = newStack.top();
    // Assert
    expect(result).toBe(15);
  });

  it("should return the minimum value from the stack in O(1) constant time, when calling the getMin method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(3);
    newStack.push(5);
    newStack.push(2);
    newStack.push(4);
    newStack.push(1);
    const result = newStack.getMin();
    // Assert
    expect(result).toBe(1);
  });

  it("should return the minimum value from the stack in O(1) constant time, when calling the getMin method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(3);
    newStack.push(5);
    newStack.push(2);
    newStack.pop();
    newStack.push(1);
    const result = newStack.getMin();
    // Assert
    expect(result).toBe(1);
  });

  it("should return the minimum value from the stack in O(1) constant time, when calling the getMin method", () => {
    // Arrange
    const newStack = new MinStack();
    // Act
    newStack.push(2);
    newStack.push(0);
    newStack.push(3);
    newStack.push(0);
    newStack.pop();
    newStack.pop();
    // newStack.pop();
    const result = newStack.getMin();

    // Assert
    expect(result).toBe(0);
  });
});
