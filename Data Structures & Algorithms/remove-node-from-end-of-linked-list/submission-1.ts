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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let node = head
        let map = new Map<number, ListNode>()
        let index = 1
        while (node !== null) {
            map.set(index, node)
            index++
            node = node.next
        }

        let toRemove = map.size - n + 1

        if (toRemove == 1) {
            if (head.next != null) {
                return head.next
            }
            return head.next
        }

        if (toRemove == map.size) {
            map.get(toRemove - 1).next = null
            return head
        }


        map.get(toRemove - 1).next = map.get(toRemove + 1)

        return map.get(1)
    }
}
