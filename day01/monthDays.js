// 8. Check whether the given month number if valid or not and print the number of days 

let months = ['january','february','march','april','may','june','july','august','september','october','november','december']
function monthDays(){
    if(monthNumber <= months.length-1 && monthNumber >= 0){
        if(monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11 ){
            console.log(`The month is ${months[monthNumber]} and has 31 days !`)
        }else if(monthNumber === 1){
            console.log(`Month is ${months[monthNumber]} and has 28/29 days`)
        }else{
            console.log(`Month is ${months[monthNumber]} and has 30 days`)
        }
    }else{
        console.log("invalid month number")
    }
}
let monthNumber = 13
monthDays(monthNumber)