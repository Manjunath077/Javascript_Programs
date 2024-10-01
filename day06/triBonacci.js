// given the number print the given digit in the tribonacci
// fibonacci series : 0,1,1,2,4,7,13,24,44
// index start from the 0
// input : 5th element
// output : 24


function triBonacci(element){
    let fib1 = 0 , fib2 = 1,fib3 = 1
    if(element == 1) return 0
    if(element == 2) return 1
    if(element == 3) return 2
    for(let i=3;i<element;i++){
        let fib = fib1 + fib2 + fib3 
        fib1 = fib2
        fib2 = fib3
        fib3 = fib
    }
    return fib3
}
let element = 2
let ans = triBonacci(element)
console.log(ans)


