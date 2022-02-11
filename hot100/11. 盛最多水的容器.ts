function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      max = Math.max(max, (right - left) * height[left]);
      left++;
    } else {
      max = Math.max(max, (right - left) * height[right]);
      right--;
    }
  }
  return max;
}
