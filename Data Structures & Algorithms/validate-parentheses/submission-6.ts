class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const open = ['(', '{', '['];
        const brackets = ['()', '{}', '[]'];

        for(let i = 0; i < s.length; i++) {

            if(open.includes(s[i])) {
                stack.push(s[i]);
            } else {

                if(!brackets.includes(stack.pop() + s[i])) {
                    return false;
                }
            }
        }

        return !stack.length;
    }
}
