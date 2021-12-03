function largestSumAfterKNegations(nums: number[], k: number): number {
  const tempNums = Array.from(nums);
  let negativeIndex = [];
  let absMin = Number.MAX_SAFE_INTEGER;
  let absMinIndex = 0;
  for (const [index, num] of nums.entries()) {
    if (num < 0) {
      negativeIndex.push(index);
    }
    if (Math.abs(num) < absMin) {
      absMin = Math.abs(num);
      absMinIndex = index;
    }
  }
  if (k <= negativeIndex.length) {
    negativeIndex = negativeIndex.sort((a, b) => Math.abs(tempNums[b]) - Math.abs(tempNums[a]));
    for (let i = 0; i < k; i++) {
      tempNums[negativeIndex[i]] = -tempNums[negativeIndex[i]];
    }
  } else {
    for (const index of negativeIndex) {
      tempNums[index] = -tempNums[index];
    }
    tempNums[absMinIndex] = (k - negativeIndex.length) % 2 ? -absMin : absMin;
  }
  return tempNums.reduce((pre, cur) => pre + cur);
}

// test
largestSumAfterKNegations([2, -3, -1, 5, -4], 2);
