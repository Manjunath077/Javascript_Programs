// Print the n fibonacci series using recursion 

function fibonacciRecursion(number){
    if(number == 1){
        return 0
    }
    if(number == 2){
        return 1
    }
    return fibonacciRecursion(number-1) + fibonacciRecursion(number-2)
}

let number = 9
console.log(fibonacciRecursion(number))