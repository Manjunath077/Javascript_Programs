// Convert the given 2 dimensional array into single dimension array
// input : [[1,2,3],[4,5,6],[7,8,9]]
// output : [1,2,3,4,5,6,7,8,9]

function conversionOfTwoDarray(arr){
    let res = []
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            res.push(arr[i][j]) 
        }
    }
    console.log(res)
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
conversionOfTwoDarray(arr)