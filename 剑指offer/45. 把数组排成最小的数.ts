function minNumber(nums: number[]): string {
  // 自定义排序规则
  return nums
    .sort((a, b) => {
      let StrA = String(a);
      let StrB = String(b);
      return ((StrA + StrB) as any) - ((StrB + StrA) as any);
    })
    .join('');
}
