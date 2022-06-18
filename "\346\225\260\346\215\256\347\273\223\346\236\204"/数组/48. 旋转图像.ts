/**
 Do not return anything, modify matrix in-place instead.
 */
// function rotate(matrix: number[][]): void {
//   let length = matrix.length;
//   let tempMatrix: number[][] = new Array(length)
//     .fill(0)
//     .map((item) => new Array(length).fill(0));
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       tempMatrix[j][length -1 - i] = matrix[i][j];
//     }
//   }
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       matrix[i][j] = tempMatrix[i][j];
//     }
//   }
// }

function rotate(matrix: number[][]): void {
  let length = matrix.length;
  for (let i = 0; i < length / 2; i++) {
    [matrix[i], matrix[length - 1 - i]] = [matrix[length - 1 - i], matrix[i]];
  }
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

/**
 * 测试部分
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
