const baseballGame = require("./baseballGame");

describe("baseballGame", () => {
  it("should return the correct sum for a simple input", () => {
    const operations = ["5", "2", "C", "D", "+"];
    expect(baseballGame(operations)).toBe(30);
  });

  it("should return the correct sum when there are multiple operations", () => {
    const operations = ["5", "-2", "4", "C", "D", "9", "+", "+"];
    expect(baseballGame(operations)).toBe(27);
  });

  it("should return 0 for an empty input", () => {
    const operations = [];
    expect(baseballGame(operations)).toBe(0);
  });

  it("should return 0 when the total sum is 0", () => {
    const operations = ["1", "C"];
    expect(baseballGame(operations)).toBe(0);
  });
});
