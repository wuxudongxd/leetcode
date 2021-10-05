function isNumber(s: string): boolean {
  const graph = {
    0: { blank: 0, sign: 1, ".": 2, digit: 6 },
    1: { ".": 2, digit: 6 },
    2: { digit: 3 },
    3: { digit: 3, e: 4 },
    4: { digit: 5, sign: 7 },
    5: { digit: 5 },
    6: { ".": 3, e: 4, digit: 6 },
    7: { digit: 5 },
  };
  let state = 0;
  for (let char of s.trim()) {
    if (char >= "0" && char <= "9") {
      char = "digit";
    } else if (char === " ") {
      char = "blank";
    } else if (["+", "-"].includes(char)) {
      char = "sign";
    } else if (["E", "e"].includes(char)) {
      char = "e";
    }
    state = graph[state][char];
    if (state === undefined) {
      return false;
    }
  }
  return [3, 5, 6].includes(state);
}
