// export function searchMatrix(matrix: number[][], target: number): boolean {
//   if (matrix.length === 0) return false;
//   let row = matrix.length - 1;
//   let col = 0;
//   const find = (row: number, col: number): boolean => {
//     if (col >= matrix[0].length || row < 0) {
//       return false;
//     }
//     let select = matrix[row][col];
//     if (select < target) {
//       return find(row, col + 1);
//     } else if (select > target) {
//       return find(row - 1, col);
//     }
//     return true;
//   };

//   return find(row, col);
// }

export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  let row = matrix.length - 1;
  let col = 0;
  while (row >= 0 && col < matrix[0].length) {
    let select = matrix[row][col];
    if (select < target) {
      col++;
    } else if (select > target) {
      row--;
    } else {
      return true;
    }
  }
  return false;
}
// test
searchMatrix([[-1, 3]], 3);
