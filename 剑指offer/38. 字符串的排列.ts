function permutation(s: string): string[] {
  const res: Set<string> = new Set();
  const map: Map<number, boolean> = new Map();
  const backtrack = (str: string) => {
    if (str.length === s.length) {
      res.add(str);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      if (map.get(i)) {
        continue;
      }
      map.set(i, true);
      backtrack(str + s[i]);
      map.set(i, false);
    }
  };
  backtrack('');
  return [...res];
}

// test
permutation('abc');
