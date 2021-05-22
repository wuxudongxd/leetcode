function intToRoman(num: number): string {
    let val: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let str: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let res: string = ''
    for (let i = 0; i < val.length; i++){
        while (num >= val[i]){
            res += str[i]
            num -= val[i]
        }
    }   
    return res
};