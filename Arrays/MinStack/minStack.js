class MinStack {
  constructor() {
    this.stack = [];
  }

  pushValue(value) {
    this.stack.push(value);
  }

  popValue() {
    this.stack.pop();
  }

  topValue() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minValue;
  }
}

module.exports = MinStack;
