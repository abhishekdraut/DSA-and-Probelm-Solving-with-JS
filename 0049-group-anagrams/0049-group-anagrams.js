/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    

let obj={}
let output=[]
let z=strs.map((item)=>item.split("").sort().join(""));

for(let item in z){
    if(obj[z[item]]){
        obj[z[item]].push(item);
        
    }
    else{
        obj[z[item]]=[item]
    }
}

for (items in obj){
    let temp=[]
    obj[items].map((item)=>{
        temp.push(strs[item])
    });
    output.push(temp);
    temp=[];
}

    return output
    
    
    
};