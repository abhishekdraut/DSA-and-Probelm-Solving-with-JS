/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordsArray=s.split(" ");
    for (let i=0;i<wordsArray.length;i++){
       if(wordsArray[i]==""){
          wordsArray.splice(i,1)
          i--
       }
    }
    return wordsArray[wordsArray.length-1].length
};