function minWindow(s: string, t: string): string {
  let l = 0; // 左指针
  let r = 0; // r 右指针
  const need = new Map();
  let res = '';
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needType = need.size;
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType -= 1;
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
}

minWindow('ADOBECODEBANC', 'ABC');
