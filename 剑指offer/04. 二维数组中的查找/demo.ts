/**
 * 第一次尝试
 * 要寻找的target首先需要要大于内部数组的第一个值，且在满足条件的一维数组中需要小于数组的最后一个值
 * 通过上边的判断条件缩小范围，然后遍历一维数组的每一项
 */
// function findNumberIn2DArray(matrix: number[][], target: number): boolean {
//   for (let i = 0; i < matrix.length; i++) {
//     if (target >= matrix[i][0]) {
//       if (target <= matrix[i][matrix[i].length - 1]) {
//         for (let j = 0; j < matrix[i].length; j++) {
//           if (target === matrix[i][j]) {
//             console.log("true");
//             return true;
//           }
//         }
//       }
//     }
//   }
//   console.log("false");
//   return false;
// }

/**
 * 第二次尝试
 * 参考剑指offer书，以右上角为参照点，target比右上角小则target不可能在最右侧一列，踢除之；target比右上角大则踢除最上边一行
 */
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length > 0) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let x = 0,
      y = columns - 1;
    // x < rows 等价于 x <= rows - 1，x和y的取值范围都是0到length-1
    while (x < rows && y >= 0) {
      // matrix[x][y]始终为右上角的值
      if (matrix[x][y] === target) {
        return true;
      } else if (matrix[x][y] > target) {
        y--;
      } else {
        x++;
      }
    }
  }
  return false;
}

/**
 * 测试部分
 */
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

findNumberIn2DArray(matrix, 5);
