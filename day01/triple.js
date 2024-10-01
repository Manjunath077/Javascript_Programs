// 4. Check whether the given number is Triple digit or not 

function tripleDigit(number){
    if((number >= -999 && number <= -100) || (number <= 999 && number >= 100)){
        console.log("It is a Triple Digit number !")
    }else{
        console.log("It is not a Triple Digit number !")
    }
}
let number = -100
tripleDigit(number)