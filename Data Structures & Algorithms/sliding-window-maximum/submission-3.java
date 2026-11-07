class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {

        List<Integer> solution = new ArrayList<>(); 
        
        int position = 0; 
        int prevMax = Integer.MIN_VALUE; 

        for(int i = position; i < position + k; i++){
            if(nums[i] > prevMax){
                prevMax = nums[i];
            }
        }

        solution.add(prevMax); 

        while(position + k < nums.length){

            if(nums[position+k] > prevMax){
                prevMax = nums[position+k]; 
            }

            if(nums[position] == prevMax){
                // Find new max
                prevMax = Integer.MIN_VALUE;
                for(int i = position + 1; i <= position + k; i++){
                    if(nums[i] > prevMax){
                        prevMax = nums[i];
                    }
                }
            }

            position++; 

            if(position + k >= nums.length){
                k = nums.length - position; 
            }

            solution.add(prevMax);

        }

        return solution.stream().filter(i -> i != null).mapToInt(i -> i).toArray(); 
        
    }
}