// Reverse the given array 

function reverseArray(arr){
    let i = 0
    let j = arr.length - 1
    while(i <= j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    console.log(arr)
}
let arr = [1,2,3,4,5,6]
reverseArray(arr)