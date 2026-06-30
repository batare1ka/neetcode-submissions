class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let area = 0;
        const stack = [];

        for(let i = 0; i < heights.length; i++) {
            let start = i;
            while(stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [index, height] = stack.pop();
                area = Math.max(area, height * (i - index));
                start = index;
            }
            stack.push([start, heights[i]]);

        }
        for (const [index, height] of stack) {
            area = Math.max(area, height * (heights.length - index));
        }
        return area;
    }
}
