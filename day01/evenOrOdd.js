// 5. Check whether the given number is Even or Odd
function evenOrOdd(number){
    if(number&1){
        console.log("Odd")
    }else{
        console.log("Even")
    }
} 
let number = 34
// let number = 349
// evenOrOdd(number)
evenOrOddNumber(number)
evenOrOddWithOutIf(number)
function evenOrOddNumber(number){
    if(number/2 === Math.floor(number/2)){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

function evenOrOddWithOutIf(number){
    let res = ['even','odd']
    let index = number % 2
    console.log(index)
}
