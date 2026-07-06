/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private res = 0;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.dfs(root);

        return this.res;
    }

    dfs(curr: TreeNode | null): number {
        if(!curr) {
            return 0;
        }
        let left = this.dfs(curr.left);
        let right = this.dfs(curr.right);
        this.res = Math.max(this.res, left + right);

        return 1 + Math.max(left, right);
    }
}
