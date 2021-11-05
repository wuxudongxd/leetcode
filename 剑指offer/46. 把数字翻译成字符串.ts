function translateNum(num: number): number {
  let numStr = num.toString();
  const dp = [];
  dp[0] = 1;
  dp[1] = Number(numStr[0] + numStr[1]) < 26 ? 2 : 1;
  for (let i = 2; i < numStr.length; i++) {
    if (numStr[i - 1] !== '0' && Number(numStr[i - 1] + numStr[i]) < 26) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[numStr.length - 1];
}

// test
console.log(translateNum(506));
