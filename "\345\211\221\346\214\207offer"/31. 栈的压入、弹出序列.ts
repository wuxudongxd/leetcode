function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let i = 0;
  const stack = [];
  for (let value of pushed.values()) {
    stack.push(value);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
}

// test

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
