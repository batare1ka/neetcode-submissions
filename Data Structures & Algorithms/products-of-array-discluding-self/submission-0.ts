class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = [1];

        let product = 1;

        for(let i = 0; i < nums.length; i++) {
            result[i] = product;
            product *= nums[i];
        }
        let sufix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] *= sufix;
            sufix *= nums[i];
        }
        
        return result;
    }
}
