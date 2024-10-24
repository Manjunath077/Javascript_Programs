// Given an array return the sum of digits using recursion
function sumOfDigitsRecusrion(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return arr[0] + sumOfDigitsRecusrion(arr.slice(1));
}
let arr = [1, 2, 3, 4, 5];
console.log(sumOfDigitsRecusrion(arr));
