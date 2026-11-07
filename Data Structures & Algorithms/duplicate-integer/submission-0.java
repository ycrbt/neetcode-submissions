class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>(); 

        for(int i = 0; i < nums.length; i++){
            if(!set.add(Integer.valueOf(nums[i]))){
                return true; 
            }
        }

        return false; 
    }
}
