/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    
    let popBrackets={
        ")":"(",
        "]":"[",
        "}":"{"
    }
    
    for (let i=0;i<s.length;i++){
       if(s[i]=="("||s[i]=="["||s[i]=="{"){
           stack.push(s[i])
       }
        else{
           if(popBrackets[s[i]]==stack[stack.length-1]){
               stack.pop()
           }
            else{
                return false
            }
        }   
    }
    if (stack.length>0){
        return false
    }
    else{
        return true
    }

};