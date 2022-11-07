/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bought=10000;
    let profit=0;
    for(i of prices){
        if(i<bought){
            bought=i
        }
        else if((i-bought)>profit){
            profit=i-bought
        }    
    }
    return profit
    
};