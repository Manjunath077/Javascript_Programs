// Print all the diagonal elements of the 2-dimensional array
// input : [
        //     [1,2,3],
        //     [4,5,6],
        //     [7,8,9]
        // ]
// output : 1,5,9

function diagonalElements(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i === j){
                console.log(arr[i][j])
            }
        }
    }
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
diagonalElements(arr)