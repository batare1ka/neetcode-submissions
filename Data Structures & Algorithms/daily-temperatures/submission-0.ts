class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [val, ind] = stack.pop();
                result[ind] = i - ind;
            }
            stack.push([temperatures[i], i]);
        }
        return result;
    }
}
