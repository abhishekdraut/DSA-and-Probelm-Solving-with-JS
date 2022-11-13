/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
return s.split(" ").filter(n => {return n.length > 0}).length;
};