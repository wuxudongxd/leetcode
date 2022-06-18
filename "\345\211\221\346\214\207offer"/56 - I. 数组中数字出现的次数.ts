function singleNumbers(nums: number[]): number[] {
  let xor = 0;
  nums.forEach((num) => {
    xor ^= num;
  });
  let lowBit = xor & -xor;
  let one = 0;
  let twe = 0;
  nums.forEach((num) => {
    if (num & lowBit) {
      one ^= num;
    } else {
      twe ^= num;
    }
  });
  return [one, twe];
}
