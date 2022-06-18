function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
  let clone_needs = [...needs];
  let res = price.reduce((acc, cur, idx) => acc + cur * needs[idx], 0);
  for (let item of special) {
    let k;
    for (k = 0; k < needs.length; k++) {
      // 需要的物品减去礼包中包含的物品，为差值
      let diff = needs[k] - item[k];
      // 极端情况，当 diff 小于 0，也就是礼包中物品数量过多，我们就不考虑这个礼包
      if (diff < 0) break;
      // 否则我们将我们需要的物品数量减少
      clone_needs[k] = diff;
    }
    // 直到得出结果
    if (k === needs.length) {
      // 基础包和大礼包比较
      res = Math.min(res, item[needs.length] + shoppingOffers(price, special, clone_needs));
    }
  }
  return res;
}
