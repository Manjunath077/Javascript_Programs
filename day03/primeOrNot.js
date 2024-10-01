// Given a number, check whether the number is prime or not
function primeOrNot(number){
    let isPrime = false
    for(let i=2;i<number;i++){
        if(number % 2 === 0){
            isPrime = true
            console.log("The given number is not a prime number")
            break;
        }
    }
    if(!isPrime){
        console.log("The given number is a prime number")
    }
}
let number = 23
primeOrNot(number)