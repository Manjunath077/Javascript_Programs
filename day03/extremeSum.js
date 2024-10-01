// 5. FInd the extreme digit sum and the internal digit sum
function extremeDigitSum(number){
    let temp = number
    let extremeSum = 0
    let internalSum = 0
    do{
        let reminder = number % 10
        if(number == temp || number < 10){
            extremeSum = extremeSum + reminder
        }else{
            internalSum = internalSum + reminder
        }
        number = Math.floor(number / 10)
    }while(number != 0)
    console.log(extremeSum)
    console.log(internalSum)
}
let number = 121
extremeDigitSum(number)