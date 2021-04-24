/**
 * 正则版
 */
// function replaceSpace(s: string): string {
//     return s.replace(/ /g, "%20");
// }


/**
 * 参考《剑指offer》，采用从后向前移动的思路
 */
function replaceSpace(s: string): string {
  const originalLength = s.length;
  let numberOfBlank = 0;
  for (const ch of s) {
      if (ch === " "){
        numberOfBlank++;
      }
  }
  if (numberOfBlank === 0) {
      return s;
  }
  const newLength = originalLength + numberOfBlank * 2;
  let indexOfOriginal = originalLength;
  let indexOfNew = newLength;
  let arrS: string[] = Array.from(s);
  while(indexOfOriginal >=  0 && indexOfNew > indexOfOriginal){
      if (arrS[indexOfOriginal] === " ") {
        arrS[indexOfNew--] = "0";
        arrS[indexOfNew--] = "2";
        arrS[indexOfNew--] = "%";
      }
      else {
        arrS[indexOfNew--] = arrS[indexOfOriginal];
      }
      indexOfOriginal--;
  }
  return arrS.join("")
}

/**
 * 测试部分
 */
replaceSpace("We are happy.");
