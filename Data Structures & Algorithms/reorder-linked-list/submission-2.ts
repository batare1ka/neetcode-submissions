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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow = head, fast = head.next;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        let prev = (slow.next = null);

        while(second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        let first = head;
        second = prev;
        while(second) {
            let temp = first.next, temp1 = second.next;
            first.next = second;
            second.next = temp;
            first = temp;
            second = temp1;
        }
    }
}
