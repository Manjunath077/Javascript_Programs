// given a number count the number of digits 
function countNumberOfDigits(number){
    let count = 0
    do{
        count++
        number = Math.floor(number / 10)
    }while(number!=0)
    return count
}
let number = 123456
console.log(countNumberOfDigits(number))