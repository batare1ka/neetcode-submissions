class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const map1 = {};
        for(let i = 0; i < s1.length; i++) {
            map1[s1[i]] = (map1[s1[i]] || 0) + 1;
        }

        let left = 0;
        let right = s1.length - 1;
        while(right < s2.length) {
            const map2 = {};
            for(let i = left; i <= right; i++) {
            map2[s2[i]] = (map2[s2[i]] || 0) + 1;
            }
            let equal = true;
            for(let key in map2) {
                if(map2[key] !== map1[key]) {
                    equal = false;
                    break;
                }
            }
            if(equal) return true;
            right++;
            left++;
        }

        return false;
    }
}
