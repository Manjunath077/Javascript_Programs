// if sum of the cubes of the digits of a number is equal to that number then given number is an amstrong number
function amstrongNumber(number){
    let sum = 0
    let temp = number
    while(number != 0){
        let reminder = number % 10
        sum = sum + (reminder ** 3)
        number = Math.floor(number / 10)
    }
    if(sum == temp){
        console.log("It is a amstrong number !")
    }else{
        console.log("It is not a amstrong number")
    }
}
let number = 153 //(1+3+5)^3
amstrongNumber(number)