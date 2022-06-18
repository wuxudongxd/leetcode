export function numTrees(n: number): number {
    let memo: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    return count(1, n);

    function count(low: number, high: number): number {
        if (low >= high) return 1;
        if (memo[low - 1][high - 1] !== 0) return memo[low - 1][high - 1]
        let res: number = 0;
        
        for (let i = low; i <= high; i++) {
            let left: number = count(low, i - 1)
            let right: number = count(i + 1, high)
            res += left * right;
        }
        memo[low][high] = res

        return res
    }
};

/**
 * 测试部分
 */
numTrees(5);
