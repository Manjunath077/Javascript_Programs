// 01 find the sum of the digits of the number
function sumOfDigits(number){
    let sum = 0
    let isNegative = false
    if(number<0){ 
        isNegative = true
        number = -1 * number
    }
    do{
        let reminder = number % 10
        if(isNegative && number < 10){
            sum = sum - reminder
        }else{
            sum = sum + reminder
        }
        number = Math.floor(number / 10)
    }while(number != 0)
    console.log(sum)
}
let number = -456 // -456 = -4 + 5 + 6 
sumOfDigits(number)