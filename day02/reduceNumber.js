// Given a number always reduce it to 0  
function reduceNumber(number){
    return number - (number - 1)
}
let number = 25
console.log(reduceNumber(number))