/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

let target =val
for(let i=0;i<nums.length;i++){
	if(nums[i]==target){
    nums.splice(i,1);
    i--;     
  }  
}
};