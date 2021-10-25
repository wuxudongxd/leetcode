class MinStack {
  private stack: { [key in string]: number }[] = [];
  // public constructor() {}

  private push(x: number): void {
    this.stack.push({
      val: x,
      min: this.stack.length ? Math.min(x, this.min()) : x,
    });
  }

  private pop(): void {
    this.stack.pop();
  }

  private top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  private min(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
