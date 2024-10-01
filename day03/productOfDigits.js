// 2 find the product of the digits of the number
function sumOfDigits(number){
    let product = 1
    do{
        let reminder = number % 10
        // console.log(reminder)
        product = product * reminder
        number = Math.floor(number / 10)
    }while(number != 0)
    console.log(product)
}
let number = 1234
sumOfDigits(number)