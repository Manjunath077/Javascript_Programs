// Given number n print only even numbers 
function printOnlyEvenNumber(number){
    for(let i = 1;i <= number;i++){
        if(i%2 === 0){
            console.log(i)
        }
    }
}
let number = 10
printOnlyEvenNumber(number)

