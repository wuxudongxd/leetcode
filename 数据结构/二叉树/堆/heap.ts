export class MiniHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  swap(i1: number, i2: number) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  insert(value: number) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  shiftUp(index: number) {
    const parentIndex = (index - 1) >> 1;
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  pop() {
    this.heap[0] = this.heap.pop() as number;
    this.shiftDown(0);
  }
  shiftDown(index: number) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

// test
const h = new MiniHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
console.log(h);
