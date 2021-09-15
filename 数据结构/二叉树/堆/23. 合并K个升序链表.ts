export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class MiniHeap {
  heap: ListNode[];
  constructor() {
    this.heap = [];
  }
  swap(i1: number, i2: number) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  insert(value: ListNode) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  shiftUp(index: number) {
    const parentIndex = (index - 1) >> 1;
    if (this.heap[parentIndex]?.val > this.heap[index]?.val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop() as ListNode;
    this.shiftDown(0);
    return top;
  }
  shiftDown(index: number) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (this.heap[leftIndex]?.val < this.heap[index]?.val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex]?.val < this.heap[index]?.val) {
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

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const res = new ListNode(0);
  let p = res;
  const h = new MiniHeap();
  lists.forEach((l) => {
    if (l) h.insert(l);
  });
  while (h.size()) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if (n.next) h.insert(n.next);
  }
  return res.next;
}
