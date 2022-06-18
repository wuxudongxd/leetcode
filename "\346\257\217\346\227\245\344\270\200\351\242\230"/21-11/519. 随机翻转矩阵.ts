export class Solution {
  public fliped: Set<number>;
  public m: number;
  public n: number;
  public constructor(m: number, n: number) {
    this.fliped = new Set();
    this.m = m;
    this.n = n;
  }

  public flip(): number[] {
    let l = this.m * this.n;
    let s = Math.floor(Math.random() * l);
    // 2 3
    while (this.fliped.has(s)) s = Math.floor(Math.random() * l);
    let r = Math.floor(s / this.n);
    let c = s % this.n;
    this.fliped.add(s);
    return [r, c];
  }

  public reset(): void {
    this.fliped.clear();
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
