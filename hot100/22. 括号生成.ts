function generateParenthesis(n: number): string[] {
  if (n === 1) return ['()'];

  let arr = generateParenthesis(n - 1);
  arr = arr
    .map((item) => {
      if (helper(item)) {
        return [`(${item})`, `()${item}`];
      }
      return [`(${item})`, `()${item}`, `${item}()`];
    })
    .flat(1);

  return arr.sort();
}

const helper = (item: string) => {
  let flag = true;
  for (let i = 0; i < item.length; ) {
    if (item[i] !== '(' || item[i + 1] !== ')') {
      flag = false;
    }
    i += 2;
  }
  return flag;
};

console.log(generateParenthesis(3));
