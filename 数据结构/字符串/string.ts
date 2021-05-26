/**
 * 字符串转字符数组
 */
let str = "string";
str.split("");

/**
 * 字符数组转字符
 */
["s", "t", "r", "i", "n", "g"].join("");

/**
 * 字符串排序(从小到大)
 */
str
  .split("")
  .sort((a, b) => a.localeCompare(b))
  .join("");

/**
 * 删除空格
 */

// 删除两侧空格
str.trim();

// 删除全部空格
str.replace(/\s*/g, "");

/**
 * number取整
 */
const num = 20.55;

// 舍去小数
~~num; // 20

// 四舍五入
Math.round(num); //21

// 向上取整
Math.ceil(num); //21

// 向下取整
Math.floor(num); //20
