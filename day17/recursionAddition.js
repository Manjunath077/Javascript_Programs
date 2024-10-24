// addition of number using recursion

function addition(number){
    if(number == 0){
        return 0
    }
    return number + addition(number - 1)
}

let number = 5
console.log(addition(number))