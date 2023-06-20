// function maxProduct(words: string[]): number {
//   let res = 0;
//   const set = new Set();
//   let flag = false;
//   for (let i = 0; i < words.length; i++) {
//     words[i].split('').forEach((char) => set.add(char));
//     for (let j = i + 1; j < words.length; j++) {
//       flag = false;
//       for (let char of words[j]) {
//         if (set.has(char)) {
//           flag = true;
//           break;
//         }
//       }
//       if (!flag) {
//         let temp = words[i].length * words[j].length;
//         if (res < temp) {
//           res = temp;
//         }
//       }
//     }
//     set.clear();
//   }
//   return res;
// }

maxProduct(['a', 'aa', 'aaa', 'aaaa']);

function getCharCodeSet(word: string) {
  let num = 0;
  for (const char of word) {
    const bit = 1 << (char.charCodeAt(0) - 97);
    num |= bit;
  }
  return num;
}

function maxProduct(words: string[]): number {
  const nums = words.map(getCharCodeSet);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] & nums[j]) === 0) {
        ans = Math.max(ans, words[i].length * words[j].length);
      }
    }
  }
  return ans;
}
