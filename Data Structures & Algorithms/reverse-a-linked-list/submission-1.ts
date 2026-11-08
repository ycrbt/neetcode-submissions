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
    reverseList(head: ListNode | null): ListNode | null {
        let previous: ListNode | null = null;
        let current = head;

        while (current !== null) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return previous;
    }
}
