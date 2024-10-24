// Sum of digits in a number using recursion

function sumOfDigits(number){
    // base condition 
    // if(number == 0){
    //     return 0
    // }
    if(number < 10){
        return number
    }
    let rem = number % 10
    return rem + sumOfDigits(Math.floor(number / 10))
}

let number = 1237
console.log(sumOfDigits(number))