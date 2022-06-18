export class MedianFinder {
  public left = -1;
  public right = -1;
  public queue: number[] = [];

  public addNum(num: number): void {
    if (!this.queue.length) {
      this.left++;
      this.right++;
    } else {
      if (this.left === this.right) {
        this.right++;
      } else {
        this.left++;
      }
    }
    this.queue.push(num);
  }

  public findMedian(): number {
    this.queue.sort((a, b) => a - b);
    return (this.queue[this.left] + this.queue[this.right]) / 2;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
