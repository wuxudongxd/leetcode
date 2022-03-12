function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const callback = (path: string[], i: number, j: number): boolean => {
    if (path.length === word.length) {
      return true;
    }
    let res1 = false;
    let res2 = false;
    let res3 = false;
    let res4 = false;
    visited[i][j] = 1;
    if (i - 1 >= 0 && board[i - 1][j] === word[path.length] && !visited[i - 1][j]) {
      res1 = callback(path.concat(board[i - 1][j]), i - 1, j);
    }
    if (i + 1 < m && board[i + 1][j] === word[path.length] && !visited[i + 1][j]) {
      res2 = callback(path.concat(board[i + 1][j]), i + 1, j);
    }
    if (j - 1 >= 0 && board[i][j - 1] === word[path.length] && !visited[i][j - 1]) {
      res3 = callback(path.concat(board[i][j - 1]), i, j - 1);
    }
    if (j + 1 < n && board[i][j + 1] === word[path.length] && !visited[i][j + 1]) {
      res4 = callback(path.concat(board[i][j + 1]), i, j + 1);
    }
    visited[i][j] = 0;
    return res1 || res2 || res3 || res4;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (callback([board[i][j]], i, j)) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(exist([['a', 'a']], 'aaa'));
