/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
let z=s.split(" ");
let q=[];
    
for(let item in z){
    if(z[item]!=""){
        q.push(z[item])
    }
}
    return q.length
};