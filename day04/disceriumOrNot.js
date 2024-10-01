// Check whether the number is Discerium 
// Discerium Number : A number is said to be the discerium number when the sum of it's digits raised to the power of their respective position is equal to the number itself
function disceriumOrNot(number){
    let numberOfDigits = countNumberOfDigits(number)
    let temp = number
    let sum = 0
    do{
        let reminder = number % 10
        sum = sum + reminder**numberOfDigits
        numberOfDigits --
        number = Math.floor(number/10)
    }while(number != 0)
    if(sum == temp){
        console.log("It is a Discerium number !")
    }else{
        console.log("It is a not Discerium number !")
    }
}
// let number = 18
let number1 = 89 
// let answer = disceriumOrNot(number1)
// console.log(answer)
disceriumOrNot(number1)

function countNumberOfDigits(number){
    let count = 0
    do{
        count++
        number = Math.floor(number / 10)
    }while(number!=0)
    return count
}