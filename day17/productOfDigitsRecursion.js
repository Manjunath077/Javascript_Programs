// product of digits using recursion

function productRecursion(number){
    if(number < 10){
        return number
    }
    let rem = number % 10
    return rem * productRecursion(Math.floor(number / 10))
}
let number = 1234
console.log(productRecursion(number))