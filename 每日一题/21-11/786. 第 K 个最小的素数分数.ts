class Heap<T> {
  private heap: T[];
  private comparer: Function;
  public constructor(prop: 'min' | 'max') {
    this.heap = [];
    switch (prop) {
      case 'min':
        this.comparer = (x: number, y: number) => x < y;
        break;
      case 'max':
        this.comparer = (x: number, y: number) => x > y;
        break;
      default:
        throw new Error('prop should be min or max');
    }
  }
  public swap(i1: number, i2: number) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  public insert(value: T) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  public shiftUp(index: number) {
    const parentIndex = (index - 1) >> 1;
    if (this.comparer(this.heap[index], this.heap[parentIndex])) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  public pop() {
    this.heap[0] = this.heap.pop() as T;
    this.shiftDown(0);
  }
  public shiftDown(index: number) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (this.comparer(this.heap[leftIndex], this.heap[index])) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.comparer(this.heap[rightIndex], this.heap[index])) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  public peek() {
    return this.heap[0];
  }
  public size() {
    return this.heap.length;
  }
}

function kthSmallestPrimeFraction(arr: number[], k: number): number[] {}
