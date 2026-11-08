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
        let set = new Set<ListNode>()
        if (head == null) {
            return false
        }

        let node = head; 

        while (node !== null) {
            if (set.has(node)) {
                return true
            }
            set.add(node)
            node = node.next
        }

        return false
    }
}
