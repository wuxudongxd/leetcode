function decode(encoded: number[]): number[] {
    let n = encoded.length + 1;
    const ans: number[] = [];
    let a = 0, b = 0;
    // 获得ans[0]^ans[1]...ans[n-2]的异或值
    for (let i = 0; i < n - 1; i += 2) {
        a ^= encoded[i];
    }
    // 获得ans[0]^ans[1]...ans[n-2]^ans[n-1]的异或值，题目交待ans为前 n 个正整数的排列
    for (let i = 1; i <= n; i++) {
        b ^= i;
    }
    ans[n - 1] = a ^ b;
    for (let i = n - 2; i >= 0; i--) {
        ans[i] = encoded[i] ^ ans[i + 1]
    }
    return ans;
};