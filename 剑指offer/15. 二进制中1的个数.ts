var hammingWeight = function(n) {
    // 巧用 x &= x - 1 清零最低位的1 这一特性不断迭代n 并记数count即可
    let count = 0

    while (n) {
        count++
        n &= n - 1
    }

    return count
};

// test
hammingWeight(100000000000000000000000000001011);