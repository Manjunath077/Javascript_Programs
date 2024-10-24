// Given an array return the sum of even elements using recursion

function sumOfEvenRecursion(arr){
    if(arr.length == 0){
        return 0
    }
    return arr[0] + (sumOfEvenRecursion(arr))
}
let arr = [1,2,3,4,5,6]
console.log(sumOfEvenRecursion(arr))

// Given a target N and a starting number 'A' check whether you can reach the target bu multiplying A by either 10 or 20 continuously
// input : target = 1000
