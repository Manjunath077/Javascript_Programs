// Given an array check whether the array is strictly increasing manner or not 
function arrayIsIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] < arr[i]) {
            continue
        } else if (arr[i-1] >= arr[i]) {
            return false
        }
        // --------another way---------
        // if (arr[i-1] >= arr[i]) {
        //     return false
        // }
    }
    return true
}
let arr = [1, 2, 3, 4, 5, 6]
// let arr = [7,2,6,8,12]
console.log(arrayIsIncreasing(arr))