function intersection(nums1: number[], nums2: number[]): number[] {

    // 借助Set
    // return [...new Set(nums1)].filter(n => nums2.includes(n));

    // 借助Map
    const map = new Map();
    nums1.forEach(n =>{
        map.set(n, true);
    });
    const res = [];
    nums2.forEach(n => {
        if (map.get(n)){
            res.push(n);
            map.delete(n);
        }
    });
    return res;

}
