/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
let sSorted=s.split("").sort().join("");
let tSorted=t.split("").sort().join("");

if(sSorted.length!=tSorted.length){
    return false
}
else{
    if(sSorted==tSorted)
    {
        return true
    }
    else{
        return false
    }
    
}
    
};