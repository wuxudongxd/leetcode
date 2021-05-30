function xorQueries(arr: number[], queries: number[][]): number[] {
    let result: number[] = []
    for (let i = 0; i < queries.length; i++) {
        let tmp = 0;
        for (let j = queries[i][0]; j <= queries[i][1]; j++){
            tmp ^= arr[j];
        }
        result[i] = tmp
    }
    return result;
};

/**
 * 测试部分
 */