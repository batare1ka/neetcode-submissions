class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let res = nums[0];
        let left = 0, right = nums.length - 1;

        while(left <= right) {
            if(nums[left] < nums[right]) {
                res = Math.min(res, nums[left]);
                break;
            }

            let mid = Math.floor((left + right) / 2);
            res = Math.min(res, nums[mid]);
            if(nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }


        }

        return res;
    }
}
