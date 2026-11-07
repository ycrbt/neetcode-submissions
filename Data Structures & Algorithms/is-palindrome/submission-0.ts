class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let trimmedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let left = 0; 
        let right = trimmedString.length - 1

        while (left < right) {
            if (trimmedString[left] != trimmedString[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
