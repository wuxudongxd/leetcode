import { MiniHeap } from "./heap";

export function findKthLargest(nums: number[], k: number): number {
    const h = new MiniHeap();
    nums.forEach(n => {
        h.insert(n);
        if (h.size() > k){
            h.pop()
        }
    })
    return h.peek();
}
