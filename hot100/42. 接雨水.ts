// function trap(height: number[]): number {
//   const highest = Math.max(...height);
//   let count = 0;
//   for (let i = 1; i <= highest; i++) {
//     let flag = false;
//     let temp = 0;
//     for (let j = 0; j < height.length; j++) {
//       if (flag) {
//         if (height[j] < i) {
//           temp++;
//         }
//       }
//       if (height[j] >= i) {
//         flag = true;
//         count += temp;
//         temp = 0;
//       }
//     }
//     flag = false;
//     console.log(count);
//   }
//   // console.log(count);

//   return count;
// }

function trap(height: number[]): number {
  let sum = 0;

  const leftArr = new Array(height.length).fill(0);
  const rightArr = new Array(height.length).fill(0);

  for (let i = 1; i < height.length - 1; i++) {
    leftArr[i] = Math.max(leftArr[i - 1], height[i - 1]);
  }

  for (let i = height.length - 2; i > 0; i--) {
    rightArr[i] = Math.max(rightArr[i + 1], height[i + 1]);
  }

  for (let i = 1; i < height.length; i++) {
    const min = Math.min(leftArr[i], rightArr[i]);
    if (min > height[i]) {
      sum += min - height[i];
    }
  }
  console.log(sum);

  return sum;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
