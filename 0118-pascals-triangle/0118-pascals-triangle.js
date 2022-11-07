/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
let levels=numRows;
if(levels==1){
    return [[1]]
}else if(levels==2){
    return [[1],[1,1]]
}
    else{
        
let arr=[[1],[1,1]];

for(let i=2;i<levels;i++){
 let temp=[]
  for (let j=0;j<=i;j++){
   if(j==0 || j==i){
    temp.push(1)
  
   }
   else{
    
    let pascalSum=arr[i-1][j-1]+arr[i-1][j];
    temp.push(pascalSum)
   }
   
  };
 arr.push(temp)
}
   return arr 
    }

};