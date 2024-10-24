// Recursion is a function again and again untill the base condition is met 
// when we use recursion we should always write the base condition at where the recursion should end.
// recursion is used to utilize the call stack effeciently


function factorial(number){
    // 
    if(number == 0){
        return 1
    }
    return number * factorial(number - 1)

}
let number = 5
console.log(factorial(number))