function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;
  const map = new Map();
  for (const char of magazine) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  let count = 0;
  for (const char of ransomNote) {
    if (map.has(char)) {
      count = map.get(char);
      if (count <= 0) return false;
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }
  return true;
}
