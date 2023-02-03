class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value, { minStack } = this) {
    this.stack.push(value);
    const isMinStackEmpty = !minStack.length;
    const hasNewMin = value <= this.top(minStack);
    const canAddMin = isMinStackEmpty || hasNewMin;
    if (canAddMin) minStack.push(value);
  }

  pop({ stack, minStack } = this) {
    const top = stack.pop();

    const canPopMin = top === this.getMin();
    if (canPopMin) minStack.pop();
  }

  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null;
  }

  getMin(minStack = this.minStack) {
    return this.top(minStack);
  }
}

module.exports = MinStack;
