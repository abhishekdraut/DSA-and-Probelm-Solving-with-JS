/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

let obj1={}
    let obj2={}
    for(let i=0;i<ransomNote.length;i++){
        if(obj1[ransomNote[i]]){
            obj1[ransomNote[i]]+=1
        }
        else{
            obj1[ransomNote[i]]=1
        }
    }
    for(let j=0;j<magazine.length;j++){
        if(obj2[magazine[j]]){
            obj2[magazine[j]]+=1
        }
        else{
            obj2[magazine[j]]=1
        }
    }
    
    for(let item in obj1 ){
        if(obj2[item]<obj1[item]){
            
            return false
        }
        else if(!obj2[item]){
            return false
            
        }
    }


    return true
    
    
};