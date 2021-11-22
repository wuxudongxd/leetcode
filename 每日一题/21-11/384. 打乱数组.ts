/**
 * 洗牌算法
 */
class Solution {
  public ans: number[] = [];
  public original: number[] = [];
  public constructor(nums: number[]) {
    this.original = nums.slice(0);
    this.ans = nums.slice(0);
  }

  public reset(): number[] {
    return this.original;
  }

  public shuffle(): number[] {
    for (let i = 0; i < this.ans.length; i++) {
      // 随意交换的索引
      let idx = Math.floor(Math.random() * this.ans.length); // 从[0, len]找一个随机数
      [this.ans[i], this.ans[idx]] = [this.ans[idx], this.ans[i]];
    }
    return this.ans;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
