// Fold the given array and return the sum of overlapping elements 

function foldArray(arr, fold) {
    for (let i = 0; i < fold; i++) {
        let res = []
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            let sum = arr[i] + arr[arr.length - 1 - i]
            res.push(sum)
        }
        if(arr.length % 2 !== 0){
            res.push(arr[Math.floor(arr.length/2)])
        }
        arr = [...res]
    }
    console.log(arr)
}

let arr = [1, 2, 3, 4,5]
let fold = 2
foldArray(arr, fold)