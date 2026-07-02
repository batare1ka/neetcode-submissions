class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let res = nums[0];
        let ind = 0;
        let left = 0, right = nums.length - 1;

        while(left <= right) {
            if(nums[left] < nums[right]) {
                res = Math.min(res, nums[left]);
                            if(nums[left] < left) {
                ind = left
            }
                break;
            }

            let mid = Math.floor((left + right) / 2);
            if(nums[mid] < res) {
                ind = mid
            }
            res = Math.min(res, nums[mid]);
            if(nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        left = nums[ind] <= target && target <= nums[nums.length - 1] ? ind: 0;
        right = nums[ind] < target && target > nums[nums.length - 1] ? ind - 1: nums.length - 1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) {
                return mid;
            }
            if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1
    }
}
