function baseballGame(operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
        break;
      case "C":
        stack.pop();
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        break;
      default:
        stack.push(Number(operations[i]));
    }
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
}

module.exports = baseballGame;
