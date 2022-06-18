// 滑动窗口框架
/* 
let left = 0, right = 0;

while (right < s.size()) {`
    // 增大窗口
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}
*/

/**
 * 滑动窗口
 */
function findContinuousSequence(target: number): number[][] {
  let l = 1;
  let r = 2;
  let sum = 3;
  let res = [];
  // 滑动窗口框架
  while (l < r) {
    if (sum === target) {
      let ans = [];
      for (let k = l; k <= r; k++) {
        ans[k - l] = k;
      }
      res.push(ans);
      // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
      sum = sum - l;
      l++;
    } else if (sum > target) {
      // 大于的条件 缩小窗口 sum已经加过了
      sum = sum - l;
      l++;
    } else {
      // 小于的情况 滑动窗口继续扩大
      r++;
      sum = sum + r;
    }
  }
  return res;
}

// test
findContinuousSequence(15);
