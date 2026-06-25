class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let profit = 0;
        while(right < prices.length) {
            if(prices[left] > prices[right]) {
                left++;
                right = left + 1;
            } else {
                profit = Math.max(profit, prices[right] - prices[left]);
                right++;
            }
        }

        return profit;
    }
}
