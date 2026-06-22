class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let str = '';

        for(let i = 0; i < strs.length; i++) {
            str += '|' + strs[i].length + '#' + strs[i];
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const arr = [];
console.log(str)
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '#' && !isNaN(+str[i-1])) {
                let j = i - 1;
                let len: string | number = '';

                while(str[j] !== '|') {
                    len+=str[j];
                    j--;
                }

                len = +len.split('').reverse().join('');
                let part = str.substr(i + 1, len);
                arr.push(part);
                i += len;
            }
            
        }

        return arr;
    }
}
