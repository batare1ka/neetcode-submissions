class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let result = 0;
        let charSet = new Set(s);

        for (let c of charSet) {
            let count = 0,
                l = 0;
            for (let right = 0; right < s.length; right++) {
                if (s[right] === c) {
                    count++;
                }

                while (right - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }

                result = Math.max(result, right - l + 1);
            }
        }
        return result;
    }
}
