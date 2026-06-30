class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let ind = 0;
        let start = 0;
        let end = matrix.length - 1;

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
                ind = mid;
                break;
            } else if (matrix[mid][0] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return this.search(matrix[ind], target) > - 1;

    }

    search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length - 1;

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            if(target === nums[mid]) {
                return mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return -1;
    }
}
