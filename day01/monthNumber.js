// 6. Check whether the given month number if valid or not

function validMonth(number){
    if(Math.floor(number) >= 0 && Math.floor(number) <= 11){
    console.log("Valid Month Number !")
    }else{
        console.log("Invalid Month Number !")
    }
}
// let number  = 3
let number = 10.6
validMonth(number)