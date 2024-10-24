// Given a 2-D array print the sum of elements of all the columns 
// input : [[1,2,3],[4,5,6],[7,8,9]]
// output : [12,15,18]

function sumOfColumnElements(arr){
    let res = []
    for(let i=0;i<arr[0].length;i++){
        let sum = 0
        for(let j=0;j<arr.length;j++){
            sum += arr[j][i]
        }
        res.push(sum)
    }
    console.log(res)
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
sumOfColumnElements(arr)