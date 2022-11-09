/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s=s.split(" ");
    let obj={};
    let set1=new Set(s)
    let set2=new Set(pattern.split(""));
     if(set1.size!=set2.size){
         return false
     }
    let correctString="";
    for(let i=0;i<pattern.length;i++){
        if(!obj[pattern[i]]){
            obj[pattern[i]]=s[i]
        }
        
    }
    for(let j=0;j<pattern.length;j++){
        correctString+=" "+obj[pattern[j]]
    }
    correctString=correctString.slice(1)
    s=s.join(" ")
    if(correctString==s){
        return true
    }
    else{
        return false
    }
};