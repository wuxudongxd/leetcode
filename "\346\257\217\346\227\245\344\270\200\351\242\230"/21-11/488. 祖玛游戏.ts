/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/prefer-for-of */
interface Board {
  board: string;
  hand: string;
  time: number;
}

function findMinStep(board: string, hand: string): number {
  const queue: Board[] = [
    {
      board,
      hand,
      time: 0,
    },
  ];
  const visited = new Set<string>();
  visited.add(`${board}${hand}0`);
  const insert = (str: string, i: number, char: string) => {
    return str.slice(0, i) + char + str.slice(i);
  };
  const remove = (s: string) => {
    while (/(.)\1{2,}/.test(s)) {
      s = s.replace(/(.)\1{2,}/, '');
    }
    return s;
  };
  const bfs = (queue: Board[]) => {
    while (queue.length) {
      const { board, hand, time } = queue.shift() as Board;
      if (board === '') {
        return time;
      }
      for (let i = 0; i < board.length; i++) {
        const set = new Set<string>();
        for (let j = 0; j < hand.length; j++) {
          // 内层循环重复的hand
          if (set.has(hand[j])) {
            continue;
          }
          // 只在连续相同颜色的球的开头位置插入新球
          if (i > 0 && board[i - 1] === hand[j]) {
            continue;
          }
          // 只在以下两种情况放置新球
          // 第 1 种情况 : 当前球颜色与后面的球的颜色相同
          // 第 2 种情况 : 当前后颜色相同且与当前颜色不同时候放置球
          let flag = false;
          if (i > 0 && board[i - 1] === board[i]) {
            flag = true;
          }
          if (board[i] === hand[j]) {
            flag = true;
          }
          if (!flag) {
            continue;
          }
          set.add(hand[j]);
          const next_b = remove(insert(board, i, hand[j]));
          const next_h = hand.replace(hand[j], '');
          const str = `${next_b}${next_h}${time + 1}`;
          if (!visited.has(str)) {
            visited.add(str);
            queue.push({
              board: next_b,
              hand: next_h,
              time: time + 1,
            });
          }
        }
      }
    }
    return -1;
  };
  return bfs(queue);
}
