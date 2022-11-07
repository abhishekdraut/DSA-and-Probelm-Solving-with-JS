/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
let index = null
for (let i = 0; i <= nums.length - 1; i++) {
  if (nums[i] == target) {
    index = i
    break;
  }else if(nums[0]>target){
  	index=0
    break;
  }
    else if (nums[i] < target && nums[i + 1] > target) {
    index = i + 1
    break;
  }
    
}

if(index==null){
	index=nums.length
}
 return index
};