// Convert the given 2-dimensional array into the transpose array
// input : [[1,2],[3,4]]
// output : [[1,3],[2,4]]

function transposeMatrix(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i !== j){
                let temp = arr[i][j]
                arr[i][j] = arr[j][i]
                arr[j][i] = temp
            }
            break
        }
    }
    console.log(arr)
}
let arr = [[1,2],[3,4]]
transposeMatrix(arr)
