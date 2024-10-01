// Find the biggest digit in the number
function biggestDigit(number){
    let biggest = -Infinity
    do{
        let reminder = number % 10
        if(reminder > biggest){
            biggest = reminder
        }
        number = Math.floor(number / 10)
    }while(number != 0)
    return biggest
}
let number = 5128346
let answer = biggestDigit(number)
console.log(answer)
