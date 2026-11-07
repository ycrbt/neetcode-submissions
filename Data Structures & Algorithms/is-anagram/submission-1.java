class Solution {
    public boolean isAnagram(String s, String t) {
        
        List<String> sList = new ArrayList<>(Arrays.asList(s.split("")));
        List<String> tList = new ArrayList<>(Arrays.asList(t.split("")));

        for(String str : sList){
            if(!tList.remove(str)){
                return false; 
            }
        }

        return tList.isEmpty(); 
    }
}
