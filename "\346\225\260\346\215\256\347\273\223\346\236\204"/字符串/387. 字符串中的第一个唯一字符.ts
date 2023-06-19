// export function firstUniqChar(s: string): number {
//   let strArr = s.split("");
//   const map = new Map();
//   for (let i = 0; i < strArr.length; i++) {
//     if (map.has(strArr[i])) {
//       map.set(strArr[i], 1);
//     } else {
//       map.set(strArr[i], 0);
//     }
//   }
//   for (let i = 0; i < strArr.length; i++) {
//     if (map.get(strArr[i]) === 0) {
//       return i;
//     }
//   }
//   return -1;
// }

export function firstUniqChar(s: string): number {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  for (const value of set) {
    let firstIndex = s.indexOf(value as string);
    let lastIndex = s.lastIndexOf(value as string);
    if (firstIndex === lastIndex) {
        return firstIndex
    }
  }
  return -1;
}

/**
 * 测试部分
 */
console.log(firstUniqChar("loveleetcode"));
