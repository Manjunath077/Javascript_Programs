// 7. Check whether the given month number if valid or not if yes print the month name 

let months = ['january','february','march','april','may','june','july','august','september','october','november','december']
function monthName(monthNumber){
    if(monthNumber <= months.length-1 && monthNumber >= 0){
        console.log(months[monthNumber])
    }else{
        console.log("invalid month number !")
    }
}
let monthNumber = 11
monthName(monthNumber)