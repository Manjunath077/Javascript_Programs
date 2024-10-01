// Given the number on one face of the dice, print the number present on the opposite side of dice

function printDiceNumber(number){
    if( 0 < Math.abs(number) < 7){
        let opposite = 7 - number
        console.log(`The opposite number of ${number} is ${opposite}`)
    }else{
        console.log("Enter value between 1 to 6")
    }
}

let number = 6
printDiceNumber(number)