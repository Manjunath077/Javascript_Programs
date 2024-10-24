// Find the sum of all the elements of the 2-dimensional array
// input : [[1,2,3],[4,5,6],[7,8,9]]
// output : 1+2+3+4+5+6+7+8+9

function twoDimensionalSum(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum += arr[i][j] 
        }
    }
    console.log(sum)
}
let arr = [[1,2,3],[4,5,6],[7,8,9]]
twoDimensionalSum(arr)
