// Find the factorial of the given number
function factorialOfNumber(number){
    let fact = 1
    if(number === 0){
        return fact
    }else{
        for(let i = number;i>=1;i--){
            fact = fact * i
        }
        return fact
    }
}
let result = factorialOfNumber(5)
console.log(result)