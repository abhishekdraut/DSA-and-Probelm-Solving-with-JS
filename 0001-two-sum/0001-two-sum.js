/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   
    const obj={}
    for(let i=0;i<nums.length;i++){
        obj[`${nums[i]}`]=i
    }
    for (let j=0;j<nums.length;j++){
        let complementry=target-nums[j];

        if(obj[complementry] && obj[complementry]!=j){

        return [j,obj[complementry]]
      }

    }

};