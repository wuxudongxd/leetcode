export function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (i: number, j: number, index = 0): boolean => {
    // 如果越界 或者 与当前目标字符不相等 就是不存在
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] != word[index])
      return false;
    // 如果当前字符是目标字符 且是目标字符串的最后一个 那么就完成了查找
    if (index == word.length - 1) return true;
    const temp = board[i][j];
    // 将当前字符置空 下一次的搜索不会再搜索该位置
    board[i][j] = "";
    // 左右下上遍历
    const res =
      dfs(i - 1, j, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i, j - 1, index + 1) ||
      dfs(i, j + 1, index + 1);
    board[i][j] = temp;
    return res;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j)) return true;
    }
  }
  return false;
}

/**
 * 测试部分
 */

// const board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word = "ABCCED";

// const board = [
//     ["a", "b"],
//     ["c", "d"],
//   ],
//   word = "abcd";

const board = [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
  ],
  word = "AAB";

exist(board, word);
