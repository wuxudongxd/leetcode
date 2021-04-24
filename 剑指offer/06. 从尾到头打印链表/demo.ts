class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * 存入数组然后逆序输出
 */
// function reversePrint(head: ListNode | null): number[] {
//   let stk = [];
//   while (head) {
//     stk.push(head.val);
//     head = head.next;
//   }
//   console.log(stk.reverse());

//   return stk.reverse();
// }

function reversePrint(head: ListNode | null): number[] {
    let nums = [];
    let node = head;
    while (node !== null) {
      nums.unshift(node.val);
      node = node.next;
    }
    return nums;
}


/**
 * 测试部分
 */
const head1 = new ListNode(1);
const head2 = new ListNode(3, head1);
const head3 = new ListNode(2, head2);
reversePrint(head3)
