function numWays(n: number): number {
  return fibImpl(0, 1, n)
}

function fibImpl(a: number, b: number, n: number): number{
    if (n === 0){
        return b;
    }
    return fibImpl(b, (a + b) % 1000000007, n -1)
}

// 1 1 2 3
