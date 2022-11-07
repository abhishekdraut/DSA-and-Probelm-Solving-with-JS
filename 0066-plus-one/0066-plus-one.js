/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const string=(BigInt(digits.join(''))+BigInt(1)).toString()
    const outputArray=[]
    for (i of string){
        outputArray.push(parseInt(i))
    }
    
    return outputArray
};