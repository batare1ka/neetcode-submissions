/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let ahead = head?.next || null;
        while(head) {
            if(head.val === ahead?.val) {
                return true;
            }
            head = head.next;
            ahead = ahead?.next?.next;
        }

        return false;
    }
}
