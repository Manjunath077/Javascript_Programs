// print the sum of even numbers and sum of odd numbers

function sumOfEvenOrOdd(number){
    let evenSum = 0
    let oddSum = 0
    for(let i=1;i<=number;i++){
        if(i % 2 === 0){
            evenSum = evenSum + i
        }else{
            oddSum = oddSum + i
        }
    }
    while(i<=n){
        if(i % 2=== 0){
            evenSum = evenSum + i
        }else{
            oddSum = oddSum + i
        }
        i++
    }
    console.log("Even sum is :" + evenSum)
    console.log("Odd sum is :" + oddSum)
}
let number = 10
sumOfEvenOrOdd(number)