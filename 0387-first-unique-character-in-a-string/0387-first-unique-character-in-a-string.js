/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    
    let obj={};
    
    for(let item in s){
        if(obj[s[item]]){
            obj[s[item]]+=1
        }
        else{
            obj[s[item]]=1
        }
    }
    console.log(obj)
    for (let index in s){
        if(obj[s[index]]==1){
            return index
        }
    }
    
     return -1
};