function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const licensePlateMap = new Map<string, number>();
  for (const plate of licensePlate) {
    if (plate.toLowerCase() <= 'z' && plate.toLowerCase() >= 'a') {
      licensePlateMap.set(plate, licensePlateMap.has(plate) ? (licensePlateMap.get(plate) as number) + 1 : 1);
    }
  }
  const res = [];
  for (const word of words) {
    const map = new Map();
    for (const char of word) {
      if (licensePlateMap.has(char)) {
        map.set(char, map.has(char) ? map.get(char) + 1 : 1);
      }
    }
    let flag = true;
    for (const [char, count] of licensePlateMap.entries()) {
      if (!map.get(char) || map.get(char) !== count) {
        flag = false;
      }
    }
    if (flag) {
      res.push(word);
    }
  }
  return res.sort((a, b) => a.length - b.length)[0];
}
