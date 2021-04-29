/**
 * 循环选择最小值
 */
// function minArray(numbers: number[]): number {
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > numbers[i + 1]){
//             return numbers[i + 1]
//         }
//     }
//     return numbers[0]
// }

function minArray(numbers: number[]): number {
  let low: number = 0;
  let high: number = numbers.length - 1;
  while (low < high) {
    const pivot: number = low + Math.floor((high - low) / 2);
    if (numbers[pivot] < numbers[high]) {
      high = pivot;
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1;
    } else {
      high -= 1;
    }
  }
  return numbers[low];
}
