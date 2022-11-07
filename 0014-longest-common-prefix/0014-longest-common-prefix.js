/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstString=strs[0];
    let prefix=""
    let prefixArray=[]
for (let i=1;i<strs.length;i++){
  for (j=0;j<strs[i].length;j++){
   if(strs[i][j]==firstString[j]){
    prefix=prefix+firstString[j]
   }
   else{
    break
   }
   
  }
 
 prefixArray.push(parseInt(prefix.length));
 prefix=""
  
}

const minIndex=Math.min(...prefixArray)
if(minIndex>0){
    return firstString.slice(0,minIndex)
}
 else{
     return ""
 }   
    
    
    
};