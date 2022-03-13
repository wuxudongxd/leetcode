// 暴力回溯 -- 超时
// function largestRectangleArea(heights: number[]): number {
//   let res = 0;
//   let path: number[] = [];
//   const backtracking = (startIndex: number) => {
//     path.push(heights[startIndex]);
//     const h = Math.min(...path);
//     const w = path.length;
//     const area = h * w;
//     res = Math.max(res, area);
//     startIndex < heights.length -1 && backtracking(startIndex + 1);
//     path.pop();
//   };
//   for (let i = 0; i < heights.length; i++) {
//     backtracking(i);
//   }
//   return res;
// }

// 单调栈
function largestRectangleArea(heights: number[]): number {
  const newHeights = [0, ...heights, 0];
  const stack = [];
  let res = 0;
  for (let i = 0; i < newHeights.length; i++) {
    while (stack.length && newHeights[stack[stack.length - 1]] > newHeights[i]) {
      const cur = stack.pop() as number;
      const h = newHeights[cur];
      const w = i - stack[stack.length - 1] - 1;
      res = Math.max(res, h * w);
    }
    stack.push(i);
  }
  return res;
}

largestRectangleArea([2, 0, 2]);
