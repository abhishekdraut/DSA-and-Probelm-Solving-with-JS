/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res=0;
    let pow=0;


    for (let i=columnTitle.length-1;i>=0;i--){
        let value=columnTitle.charCodeAt(i);
        res+=Math.pow(26,pow)*(value-64);
        pow++;
    }
    return res
};