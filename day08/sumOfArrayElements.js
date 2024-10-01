// Find the dum of all the elements in an array

function sumOfElements(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
        console.log(sum)
    }
    console.log(sum)

}
let arr = [1,2,3,4,5]  // expected output : 1+2+3+4+5 = 15
sumOfElements(arr)