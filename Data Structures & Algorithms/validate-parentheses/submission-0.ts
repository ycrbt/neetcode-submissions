class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let list: string[] = []
        for (let c of s) {
            if (['[', '(', '{'].includes(c)) {
                list.push(c)
            } else {
                if (c == ']') {
                    if (list.pop() != '[') {
                        return false
                    }
                }
                if (c == ')') {
                    if (list.pop() != '(') {
                        return false
                    }
                }
                if (c == '}') {
                    if (list.pop() != '{') {
                        return false
                    }
                }
            }
        }
        return list.length === 0
    }
}