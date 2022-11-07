/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var j=0;
    for(let i=0; i<nums.length-1;i++){
        if(nums[i]!=nums[i+1]){
            j=j+1;
            nums[j]=nums[i+1]
        }
       
    }
    
    
    nums.splice(j+1,nums.length)
   
};

