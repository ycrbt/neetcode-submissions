class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {

        List<Integer> solution = new ArrayList<>(); 
        Queue<Integer> windowElements = new PriorityQueue<>(Collections.reverseOrder()); 
        
        int position = 0; 
        int prevMax = Integer.MIN_VALUE; 
        int maxPosition = -1; 

        for(int i = 0; i < k; i++){
            windowElements.offer(nums[i]);
        }

        solution.add(windowElements.peek());

        while(position + k < nums.length){

            windowElements.remove(nums[position]);
            windowElements.offer(nums[position+k]);
            position++;

            if(position + k >= nums.length){
                k = nums.length - position; 
            }

            solution.add(windowElements.peek());

        }

        return solution.stream().filter(i -> i != null).mapToInt(i -> i).toArray(); 
        
    }
}