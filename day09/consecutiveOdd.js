// Check whether the 3 consecutive elements are odd or not in an array

function consecutiveOdd(arr){
    for(let i=0;i<arr.length-2;i++){
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
            return true
        }
    }
    return false
}
let arr = [1,2,3,5,7]
console.log(consecutiveOdd(arr))

