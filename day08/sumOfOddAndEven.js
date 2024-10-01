// find the sum of odd elements and even elements in an array

function sumOfOddAndEven(arr){
    let oddSum = 0
    let evenSum = 0
    for(let i=0;i<arr.length;i++){
        if(i%2 == 0){
            oddSum += arr[i]
        }else{
            evenSum += arr[i]
        }
    }
    console.log("Odd sum is :",oddSum )
    console.log( "Even sum :",evenSum)
}
let arr = [1,2,3,4,5,6] // output : oddsum: 1+3+5 = 9 , evensum: 2+4+6 = 12
sumOfOddAndEven(arr)

