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
    private res: number[][] = [];
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        this.dfs(root, 0);

        return this.res;
    }

    dfs(node: TreeNode | null, depth: number): TreeNode | null {
            if (!node) return;

            if (this.res.length === depth) {
                this.res.push([]);
            }

            this.res[depth].push(node.val);
            this.dfs(node.left, depth + 1);
           this. dfs(node.right, depth + 1);
        }
}
