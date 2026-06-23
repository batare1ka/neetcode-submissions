class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;

        let i = 0;
        let j = heights.length - 1;

        while(i < j) {
            const min = Math.min(heights[i], heights[j]);
            area = Math.max(area, min * (j - i));
            if(min === heights[i]) i++;
            else j--;
        }

        return area;
    }
}
