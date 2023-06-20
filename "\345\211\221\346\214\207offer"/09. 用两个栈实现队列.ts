/**
 * 第一次尝试
 */
// export class CQueue {
//   arr: number[];
//   constructor() {
//     this.arr = [];
//   }

//   appendTail(value: number): void {
//     this.arr.unshift(value);
//   }

//   deleteHead(): number {
//     if (this.arr.length !== 0) {
//       // let arrTmp = this.arr
//       // return arrTmp.reverse().pop() as number
//       return this.arr.pop() as number;
//     }
//     return -1;
//   }
// }

/**
 * 第二次尝试
 */
// export class CQueueNode {
//   val?: number | string;
//   point?: CQueueNode;
//   constructor(val?: number, point?: CQueueNode) {
//     this.val = val == undefined ? undefined : val;
//     this.point = point == undefined ? undefined : point;
//   }
// }

// class CQueue {
//    node: CQueueNode;
//   lastNode: CQueueNode;
//   constructor() {
//     this.node = new CQueueNode();
//     this.lastNode = this.node;
//   }

//   appendTail(value: number): void {
//     this.lastNode.val = value;
//     this.lastNode.point = new CQueueNode();
//     this.lastNode = this.lastNode.point;
//   }

//   deleteHead(): number {
//     if (this.node.val !== undefined) {
//       let tempVal = this.node.val;
//       if (this.node.point !== undefined) {
//         this.node = this.node.point;
//       }
//       return tempVal as number;
//     }
//     return -1;
//   }
// }

/**
 * 第三次尝试
 */
export class CQueue {
  enter: number[];
  leave: Array<number | undefined>;
  constructor() {
    this.enter = [];
    this.leave = [];
  }

  appendTail(value: number): void {
    this.enter.push(value);
  }

  deleteHead(): number {
    if (!this.leave.length) {
      while (this.enter.length) {
        this.leave.push(this.enter.pop());
      }
    }
    return <number>this.leave.pop() || -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

