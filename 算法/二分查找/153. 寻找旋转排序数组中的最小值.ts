export function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = left + ~~((right - left) / 2);
        if (nums[mid] < nums[right]){
            right = mid;
        } else if (nums[mid] > nums[right]){
            left = mid + 1;
        } else {
            right--;
        }
    }
    
    return nums[left];
}

// 测试
findMin([2, 3, 4, 5, 1]);