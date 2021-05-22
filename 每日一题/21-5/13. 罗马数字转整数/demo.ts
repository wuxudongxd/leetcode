function romanToInt(s: string): number {
    let val: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let str: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let num: number = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.slice(i, i + 1)
        let twoChar = s.slice(i, i + 2)
        let flag: boolean = true
        for (let j = 0; j < str.length; j++) {
            if (twoChar === str[j]) {
                num += val[j]
                i++
                flag = false
                break;
            }
        }
        if (flag) {
            for (let j = 0; j < str.length; j++) {
                if (char === str[j]) {
                    num += val[j]
                    break;
                }
            }
        }
    }


    return num
};


/**
 * 测试部分
 */
console.log(romanToInt("IV"));
