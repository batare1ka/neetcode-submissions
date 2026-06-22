class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = {};

        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        }

        let arr = new Array(nums.length).fill([]);

        for(let key in map) {
            console.log(key, map[key])
            const box = arr[map[key] - 1];
            if(!box.length) {
                arr[map[key]-1] = [+key];
            } else {
                arr[map[key]-1] = [...arr[map[key]-1], + key];
            }
        }
        const result = [];
        for(let i = arr.length - 1; i >= 0; i--) {
            if(result.length === k) break;
            if(arr[i].length) result.push(...arr[i]);
        }
        return result;
    }
}
