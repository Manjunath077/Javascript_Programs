// 01 find the sum of the digits of the number
function sumOfDigits(number){
    let sum = 0
    do{
        let reminder = number % 10
        // console.log(reminder)
        sum = sum + reminder
        number = Math.floor(number / 10)
    }while(number != 0)
    console.log(sum)
}
let number = 1234
sumOfDigits(number)