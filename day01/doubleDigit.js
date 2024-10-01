// 3. Check whether the given number is Double digit or not 
function doubleDigit(number){
    // for negative number                  for positive number
    if((number >= -99 && number <= -10) || (number <= 99 && number >= 10)){
        console.log("It is a Double digit number")
    }else{
        console.log("It is not a double digit number")
    }
}
// let number = -1
let number = 12
doubleDigit(number)