/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  

s=s.split("");
let vovels={"a":"a","e":"e","i":"i","o":"o","u":"u","A":"A","E":"E","I":"I","O":"O","U":"U"};
let presentVovels=[]

for(let i=0;i<s.length;i++){
    if(s[i]==vovels[s[i]]){
        presentVovels.unshift(s[i]);
        s.splice(i,1,"_")
    }
}

let pointer=0
for(let i=0;i<s.length;i++){
    if(s[i]=="_"){
        s.splice(i,1,presentVovels[pointer]);
        pointer++
    }
    
}

    return s.join("");
};