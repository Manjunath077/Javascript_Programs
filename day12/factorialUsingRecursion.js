// Factorial using recurssion 
function factorial(number){
    if(number == 0){
        return 1
    }
    return number * factorial(number -1)
}
let number = 5
console.log(factorial(number))