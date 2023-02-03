function validParentheses(s) {
  const stack = [];
  const hashMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  if (!s) return true;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (hashMap[current]) {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== hashMap[current]) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

module.exports = validParentheses;
