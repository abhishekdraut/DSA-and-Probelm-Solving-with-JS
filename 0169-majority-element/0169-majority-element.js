/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    let max=0
    let value=0
    for(i of nums){
        if (obj[i]){
            obj[i]=obj[i]+1
        }
        else{
            obj[i]=1
        }
    }
    
    for(j in obj){
        if(obj[j]>max){
            max=obj[j]
            value=j
        }
    }
    return value
};