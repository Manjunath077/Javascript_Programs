// Find the sum of even index elements in an array

function sumOfEvenIndex(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        if(i % 2 !== 0){
            sum += arr[i]
        }
    }
    console.log(sum)

}
let arr = [1,2,3,4,5,6] // output : 2+4+6 = 12
sumOfEvenIndex(arr)