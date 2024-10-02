// Given an array print the consecutive numbers are in increasing order or not 
function consecutiveIncrease(arr){
    for(let i=0;i<arr.length-2;i++){
        let a = arr[i]
        let b = arr[i+1]
        let c = arr[i+2]
        if(a<b && b<c){
            return true
        }
    }
    return false
}
let arr = [1,4,3,5,6,2,1]
console.log(consecutiveIncrease(arr))