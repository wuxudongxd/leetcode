// 待整理
function canEat(candiesCount: number[], queries: number[][]): boolean[] {
    // [7,4,5,3,8]
    let res = [];
    let total = [candiesCount[0]]
    for(let i = 1;i<candiesCount.length;i++){
        total[i] = candiesCount[i]+total[i-1];
    }
    // total = [7, 11, 16, 19, 27]

    for(let i = 0;i<queries.length;i++){

        let ftype = queries[i][0];
        let fday = queries[i][1]+1;
        let cap = queries[i][2];

        let sum = total[ftype];
        if(sum/fday>=1 && Math.floor(sum/fday)<= cap && cap !=1 && sum-fday*cap<=candiesCount[ftype]){
            res.push(true)
        }else{
            res.push(false)
        }
    }
    return res;

};
