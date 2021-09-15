// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map();
//   nums.forEach((n) => {
//     map.set(n, map.has(n) ? map.get(n) + 1 : 1);
//   });
//   const list = Array.from(map).sort((a, b) => b[1] - a[1]);
//   return list.slice(0, k).map((n) => n[0]);
// }

interface n {
    value: number;
    key: number
}

class MiniHeap {
  heap: n[];
  constructor() {
    this.heap = [];
  }
  swap(i1: number, i2: number) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  insert(value: n) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  shiftUp(index: number) {
    const parentIndex = (index - 1) >> 1;
    if (this.heap[parentIndex]?.value > this.heap[index]?.value) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  pop() {
    this.heap[0] = this.heap.pop() as n;
    this.shiftDown(0);
  }
  shiftDown(index: number) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (this.heap[leftIndex]?.value < this.heap[index]?.value) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex]?.value < this.heap[index]?.value) {
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

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const h = new MiniHeap();
  map.forEach((value, key) => {
    h.insert({ value, key });
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.heap.map((n) => n.key);
}
