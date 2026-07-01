class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1, right = Math.max(...piles), res = right;
        
        while(left <= right) {
            const k = Math.floor((left + right) / 2);
            let totalTime = 0;
            for(const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if(totalTime <= h) {
                res = k;
                right = k - 1;
            } else {
                left = k + 1; 
            }
        }

        return res;
    }
}
