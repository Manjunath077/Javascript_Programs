// Given a number print the sinlge numbers 
function printSingleNumber(number){
    while(number != 0){
        let reminder = number % 10
        console.log(reminder)
        number = Math.floor(number/10)
    }
}
let number = -123456
printSingleNumber(Math.abs(number))
