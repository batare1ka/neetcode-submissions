// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const nodeMap = new Map();
        nodeMap.set(null, null);

        let cur = head;
        while(cur) {
            let copy = new Node(cur.val)
            nodeMap.set(cur, copy);
            cur = cur.next;
        }
        cur = head; 
        while(cur) {
            let copy = nodeMap.get(cur);
            copy.next = nodeMap.get(cur.next);
            copy.random = nodeMap.get(cur.random);
            cur = cur.next;
        }

        return nodeMap.get(head);
    }
}
