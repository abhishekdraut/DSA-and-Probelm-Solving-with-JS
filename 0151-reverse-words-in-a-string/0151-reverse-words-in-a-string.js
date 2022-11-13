/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
   

let z=s.split(" ");
let o=[];
for(let i=0;i<z.length;i++){
    if(z[i]!=""){
        o.unshift(z[i])
    }
}
    return o.join(" ")
};