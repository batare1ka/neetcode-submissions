class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        for(let i = 0, j = s.length - 1; i <= j; i++, j--) {
            while(s[i] !== undefined && !/^[a-z0-9]$/i.test(s[i])) {
                i++
            }
            while(s[j] !== undefined && !/^[a-z0-9]$/i.test(s[j])) {
                j--
            }
            if(s[i] !== undefined && s[j] !== undefined && s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        }

        return true;
    }
}
