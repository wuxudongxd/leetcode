function exchange(nums: number[]): number[] {
    const even = nums.filter(num => num % 2 === 0);
    const odd = nums.filter(num => num % 2 !== 0);
    return [...odd, ...even];
}
