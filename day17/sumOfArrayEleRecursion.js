// Sum of array elements usnig recursion

// tracing
// [5] + [7,2,-1,0]
// [7] + [2,-1,0]
// [2] + [-1,0]
// [-1] + [0]
// final result :  0 + (-1) + 2 + 7 + 5 = 13

// With slice method 
function sumOfArrayElements(arr){
    if(arr.length == 1){
        return arr[0]
    }
    return arr[0] + sumOfArrayElements(arr.slice(1))
}
let arr = [5,7,2,-1,0] 
console.log(sumOfArrayElements(arr))


// with out slice method 
function sumOfArrayElementsWithOutSlice(arr1,i){
    if(i == arr1.length-1){
        return arr1[i]
    }
    return arr1[i] + sumOfArrayElementsWithOutSlice(arr1,i+1)
}
let arr1 = [5,7,2,-1,0] 
let i = 0
console.log(sumOfArrayElementsWithOutSlice(arr1,i))