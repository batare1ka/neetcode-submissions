class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set();
        let longest = 0;
        let left = 0;
        
        for(let i = 0; i < s.length; i++) {
            while(set.has(s[i])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[i]);
            longest = Math.max(longest, i - left + 1);
        }
        return longest;
    }
}
