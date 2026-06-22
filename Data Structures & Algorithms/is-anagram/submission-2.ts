class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const set = new Map();

        for(let i = 0; i < s.length; i++) {
            if(set.has(s[i])) {
                set.set(s[i], set.get(s[i]) + 1);
            } else {
             set.set(s[i], 1);
            }
        }
        for(let i = 0; i < t.length; i++) {
            if(!set.has(t[i])) {
                return false;
            } else if(set.has(t[i]) && set.get(t[i]) > 1) {
                set.set(t[i], set.get(t[i]) - 1);
            } else if(set.has(t[i]) && set.get(t[i]) === 1) {
                set.delete(t[i]);
            }
        }

        return !set.size;
    }
}
