class MinStack {
    private stack = [];
    private extraStack = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if(this.extraStack.length) {
            this.extraStack.push(Math.min(this.extraStack[this.extraStack.length - 1], val));
        } else {
            this.extraStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.extraStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.extraStack[this.extraStack.length - 1];
    }
}
