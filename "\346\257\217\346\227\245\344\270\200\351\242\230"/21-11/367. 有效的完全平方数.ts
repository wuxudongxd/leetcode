function isPerfectSquare(num: number): boolean {
  let l = 0;
  let r = num;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (mid * mid <= num) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return r * r === num;
}
