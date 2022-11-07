/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let obj={}
    for(i of nums){
     if(obj[i]){
       delete obj[i]  
     }
        else{
            obj[i]=1
        }
    }
    
    return Object.keys(obj)[0]
    
};