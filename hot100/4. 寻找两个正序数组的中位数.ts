function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const total = nums1.length + nums2.length;
  const copy1 = nums1.slice();
  const copy2 = nums2.slice();
  let newArr: number[] = [];
  while (copy1.length && copy2.length) {
    newArr.push(copy1[0] < copy2[0] ? (copy1.shift() as number) : (copy2.shift() as number));
  }
  newArr = [...newArr, ...copy1, ...copy2];

  console.log(newArr);

  if (total % 2 === 0) {
    return (newArr[total / 2 - 1] + newArr[total / 2]) / 2;
  } else {
    return newArr[Math.floor(total / 2)];
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
