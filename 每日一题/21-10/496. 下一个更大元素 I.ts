/* 
// 双循环暴力求解
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res = [];
  for (const item of nums1) {
    const index = nums2.indexOf(item);
    let flag = false;
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > item) {
        res.push(nums2[i]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      res.push(-1);
    }
  }
  return res;
}
*/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  return nums1.map((num1) => nums2.slice(nums2.indexOf(num1) + 1).find((num2) => num2 > num1) || -1);
}
