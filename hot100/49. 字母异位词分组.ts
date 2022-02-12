function groupAnagrams(strs: string[]): string[][] {
  const set = new Set(strs.map((str) => str.split('').sort().join('')));
  const map = new Map<string, string[]>();
  for (const item of set.values()) {
    map.set(item, []);
  }
  for (const str of strs) {
    const newStr = str.split('').sort().join('');
    if (map.has(newStr)) {
      map.get(newStr)?.push(str);
    }
  }
  const res: string[][] = [];
  for (const arr of map.values()) {
    res.push(arr);
  }

  return res;
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
