// 4. Perfect number : perfect number is a number which is the sum of all the divisor of that number

function perfectNumber(number){
    let sum = 0
    for(let i = 1;i<=Math.floor(number/2);i++){
        if(number % i === 0){
            sum = sum + i
        }
    }
    if(sum == number){
        console.log("The given number is a perfect number")
    }else{
        console.log("The given number is not a perfect number")
    }
}
let number = 28
perfectNumber(number)
