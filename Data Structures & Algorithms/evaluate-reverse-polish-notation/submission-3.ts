class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];

        for(let i = 0; i < tokens.length; i++) {
            if(tokens[i] === '/') {
                const first = stack.pop();
                const second = stack.pop();
                
                stack.push(Math.trunc(second / first));

            } else if(tokens[i] === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if(tokens[i] === '-') {
                const first = stack.pop();
                const second = stack.pop();
                
                stack.push(second - first);
            } else if(tokens[i] === '+') {
                stack.push(stack.pop() + stack.pop());
            } else {
                stack.push(+tokens[i]);
            }
        }

        return stack.pop();
    }
}
