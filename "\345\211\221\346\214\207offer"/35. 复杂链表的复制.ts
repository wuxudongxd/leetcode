// export function Node(val: any, next?: undefined, random?: undefined) {
//   this.val = val;
//   this.next = next;
//   this.random = random;
// }

export class Node {
  public val: number;
  public next: Node | null;
  public random: Node | null;
  public constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

let copyRandomList = function (head: Node | null) {
  if (head === null) return null;
  let p: Node | null = head;
  let map = new Map();
  let node = new Node(p.val);
  let pre = node;
  let res = node;
  map.set(p, node);
  p = p.next;
  while (p !== null) {
    node = new Node(p.val);
    map.set(p, node);
    pre.next = node;
    pre = node;
    p = p.next;
  }
  p = res;
  let q: Node | null = head;
  while (p && q) {
    p.random = map.get(q.random);
    p = p.next;
    q = q.next;
  }

  return res;
};
