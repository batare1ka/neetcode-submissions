class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {};

        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++) {
            if(map[target - nums[i]] !== undefined && i !== map[target - nums[i]]) {
                return [Math.min(i, map[target - nums[i]]), Math.max(i, map[target - nums[i]])]
            }
        }

        return [];
    }
}
