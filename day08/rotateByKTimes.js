// Rotate the array by K-times
// k = k % Array.length


function rotateByKTimes(arr,k){
    k = k % arr.length
    for(let i=0;i<k;i++){
        let lastElement = arr[arr.length - 1]
        for(let j=arr.length-1;j>0;j--){
            arr[j] = arr[j-1]
        }
        arr[0] = lastElement 
    }
    return arr
}
let arr = [1,2,3,4]
let k = 2
let answer = rotateByKTimes(arr,k)
console.log(answer)