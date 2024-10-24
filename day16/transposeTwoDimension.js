// input : [[1,2,3],[4,5,6],[7,8,9]]
// output : [ 1 4 7 
        //    2 5 8
        //    3 6 9
        //  ]

function transposeTwoDimension(arr){
    
    for(let i=0;i>arr.length;i++){
        for(let j=0;j<i;j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
    console.log(arr)
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
transposeTwoDimension(arr)
