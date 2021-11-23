function buddyStrings(A: string, B: string): boolean {
  // 不相等 false
  if (A.length !== B.length || A.length + B.length <= 2) return false;
  if (A === B) {
    // 有重复字符 true
    return A.length > new Set(A).size;
  }
  const indexArr: number[] = [];
  for (let index = 0; index < A.length; index++) {
    if (A[index] !== B[index]) {
      indexArr.push(index);
    }
  }
  return indexArr.length === 2 && A[indexArr[0]] === B[indexArr[1]] && A[indexArr[1]] === B[indexArr[0]];
}
