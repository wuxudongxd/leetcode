function findRelativeRanks(score: number[]): string[] {
  const map = new Map();
  const obj = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  for (let [key, value] of score.entries()) {
    map.set(value, key);
  }
  let scoreOrder = score.sort((a, b) => b - a);
  const res = new Array(score.length);
  for (let [index, score] of scoreOrder.entries()) {
    res[map.get(score)] = index < 3 ? obj[index] : `${index + 1}`;
  }
  return res;
}
