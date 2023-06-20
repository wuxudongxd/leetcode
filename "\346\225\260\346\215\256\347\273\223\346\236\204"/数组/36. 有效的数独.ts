export function isValidSudoku(board: string[][]): boolean {
  let boardSet = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (boardSet.has(board[i][j])) {
          return false;
        }
        boardSet.add(board[i][j]);
      }
    }
    boardSet.clear();
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (boardSet.has(board[j][i])) {
          return false;
        }
        boardSet.add(board[j][i]);
      }
    }
    boardSet.clear();
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          if (board[i * 3 + m][j * 3 + n] !== ".") {
            if (boardSet.has(board[i * 3 + m][j * 3 + n])) {
              return false;
            }
            boardSet.add(board[i * 3 + m][j * 3 + n]);
          }
        }
      }
      boardSet.clear();
    }
  }
  return true;
}

/**
 * 测试部分
 */
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
