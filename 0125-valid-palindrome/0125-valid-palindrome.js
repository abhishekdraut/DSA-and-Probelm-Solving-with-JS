/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
// const b = "A man, a plan, a canal: Panama"
const a=s.toLowerCase()
let str=""


for(let i=0;i<a.length;i++){
    if((a.charCodeAt(i)>=48 && a.charCodeAt(i)<=57) || (a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122) ){
        str=str+a[i]
    }
}

let revStr=str.split("").reverse().join("")
if(str==revStr)
{
    return true
}
else{
    return false
}
};