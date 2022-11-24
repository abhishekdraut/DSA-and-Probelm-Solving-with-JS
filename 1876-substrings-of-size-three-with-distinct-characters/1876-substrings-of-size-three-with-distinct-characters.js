/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let k=3;
    let good=0
    for(let i=0;i<=s.length-k;i++){
        let sliceOfString=s.slice(i,i+k);
        if(sliceOfString.length=== new Set(sliceOfString).size){
            good+=1
        }
    }
    return good;
    
    
};