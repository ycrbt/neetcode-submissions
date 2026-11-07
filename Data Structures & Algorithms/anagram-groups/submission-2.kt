class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        val hashMap = mutableMapOf<String, MutableList<String>>()
        for (str in strs) {
            val hash = str.toList().sorted().joinToString("")
            val list = hashMap[hash] ?: mutableListOf()
            list.add(str)
            hashMap[hash] = list
        }
        return hashMap.values.toList()
    }
}
