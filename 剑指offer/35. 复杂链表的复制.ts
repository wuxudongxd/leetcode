export function Node(val, next?, random?) {
  this.val = val;
  this.next = next;
  this.random = random;
}

let copyRandomList = function (head) {
  if (head === null) return null;
  let p = head;
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
  let q = head;
  while (p) {
    p.random = map.get(q.random);
    p = p.next;
    q = q.next;
  }

  return res;
};
