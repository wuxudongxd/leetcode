// function intersect(nums1: number[], nums2: number[]): number[] {
//   function twoDimensionArr(nums: number[]): number[][] {
//     let arr: number[][] = [];
//     for (let i = 0; i < nums.length; i++) {
//       let flag: boolean = false;
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j][0] == nums[i]) {
//           arr[j][1] += 1;
//           flag = true;
//         }
//       }
//       if (!flag) {
//         arr.push([nums[i], 1]);
//       }
//     }
//     return arr;
//   }
//   let arr1: number[][] = twoDimensionArr(nums1);
//   let arr2: number[][] = twoDimensionArr(nums2);
//   let ans: number[] = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i][0] == arr2[j][0]) {
//         if (arr1[i][1] <= arr2[j][1]) {
//           for (let t = 0; t < arr1[i][1]; t++) {
//             ans.push(arr1[i][0]);
//           }
//         } else {
//           for (let t = 0; t < arr2[j][1]; t++) {
//             ans.push(arr2[j][0]);
//           }
//         }
//       }
//     }
//   }
//   return ans;
// }

function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    ans = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else {
      nums1[i] < nums2[j] ? i++ : j++;
    }
  }
  return ans
}

/**
 * 测试部分
 */

intersect([1, 2, 2, 1], [2, 2]);
