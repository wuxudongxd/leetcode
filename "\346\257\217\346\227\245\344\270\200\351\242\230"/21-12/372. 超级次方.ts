/* eslint-disable no-param-reassign */
function superPow(a: number, b: number[]): number {
  const mod = 1337;
  const qPow = (a: number, b: number) => {
    let ret = 1;
    a = a % mod;
    while (b) {
      if (b & 1) ret = (ret * a) % mod;
      a = (a * a) % mod;
      b = b >> 1;
    }
    return ret;
  };
  let ret = 1;
  a = a % mod;
  for (let i = b.length - 1; i >= 0; i--) {
    ret = (ret * qPow(a, b[i])) % mod;
    a = qPow(a, 10);
  }
  return ret;
}
