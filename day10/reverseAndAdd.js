// Given an array print the sum of all the elements persent in even index 

function reverseAndAdd(arr){
    let i = 0
    let j = arr.length - 1
    let sum = 0
    while(i <= j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    // console.log(arr) // [6,5,4,3,2,1]
    for(let i=0;i<arr.length;i++){
        if(i % 2 == 0){
            sum += arr[i]
        }
    }
    // console.log(arr)
    console.log(sum)
}
let arr = [1,2,3,4,5,6]
reverseAndAdd(arr)