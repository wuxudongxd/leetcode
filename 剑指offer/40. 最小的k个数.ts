function getLeastNumbers(arr: number[], k: number): number[] {
  if (arr.length === k) return arr;
  const left: number[] = [];
  const right: number[] = [];
  const mid = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return left.length < k ? [...left, mid, ...getLeastNumbers(right, k - left.length - 1)] : getLeastNumbers(left, k);
}
