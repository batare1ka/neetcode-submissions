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
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if(!subRoot) {
            return true;
        }
        if(!root) {
            return false;
        }
        if(this.sameTree(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    sameTree(node: TreeNode | null, subNode: TreeNode | null) :boolean {
        if(!node && !subNode) {
            return true;
        }
        if(node && subNode && node.val === subNode.val) {
            return this.sameTree(node.left, subNode.left) && this.sameTree(node.right, subNode.right)
        }

        return false;
    }
}
