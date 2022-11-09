/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
 let sArray=s.split("");
let tArray=t.split("");
   
    if(sArray.length!=tArray.length){
        return false
    }
    for(let i=0;i<sArray.length;i++){
        let isPresent=tArray.indexOf(sArray[i]);
        
        if(isPresent!=-1){
            tArray.splice(isPresent,1);
            sArray.splice(i,1);
            
            i--
        }
        else{
            return false
            break;
        }
        
        
    }
    if(sArray.length==0 && tArray.length==0){
        return true
    }  
    else{
        return false
    }
    
    
};