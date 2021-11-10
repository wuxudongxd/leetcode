function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let res = timeSeries.length * duration;
  let tempSum = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    let temp = timeSeries[i] - timeSeries[i - 1] - duration;
    if (temp < 0) {
      tempSum += temp;
    }
  }
  return res + tempSum;
}
