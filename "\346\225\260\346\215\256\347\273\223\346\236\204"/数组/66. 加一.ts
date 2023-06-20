// 整型溢出
// function plusOne(digits: number[]): number[] {
//   return Array.from((parseInt(digits.join("")) + 1).toString().split(""), x => parseInt(x));
// }

function plusOne(digits: number[]): number[] {
  let i = 1;
  while (digits[digits.length - i] === 9) {
    digits[digits.length - i] = 0;
    i++;
  }
  if (i > digits.length) {
    digits.unshift(1);
  } else {
    digits[digits.length - i] += 1;
  }
  return digits;
}
