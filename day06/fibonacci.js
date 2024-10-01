// given the number print the given digit in the fibonacci
// fibonacci series : 0,1,1,2,3,5,8,13
// index start from the 0
// input : 5th element
// output : 3

function getElemFromFibonacci(element){
    let fib1 = 0
    let fib2 = 1
    if(element == 1 || element == 2){
        console.log(1)
    }else{
        for(let i=2;i<=element;i++){
            let fib3 = fib1 + fib2
            fib1 = fib2
            fib2 = fib3
        }
        console.log(fib2)
    }
}
let element = 2
getElemFromFibonacci(element)