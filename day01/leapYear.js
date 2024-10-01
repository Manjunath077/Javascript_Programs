// 9. Check whether the given year is leap year or not 
function leapYear(year){
    if((year % 400 === 0 || year % 4 === 0) && year % 100 !== 0){
        console.log(`The given year ${year} is a leap year`)
    }else{
        console.log(`The given year ${year} is not a leap year !`)
    }
}
let year = 2004
leapYear(year)