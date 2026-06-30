class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pairs = position.map((pos, ind) => [pos, speed[ind]]);
        pairs.sort((a, b) => a[0] - b[0]);
        const stack = [];

        for(let i = pairs.length - 1; i >= 0; i--) {
            const [pos, spd] = pairs[i];
            stack.push((target - pos) / spd);
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }


        return stack.length;
    }
}
