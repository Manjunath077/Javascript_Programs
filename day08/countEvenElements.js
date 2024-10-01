// Count the number of even elements

function countEvenElements(arr){
    let evenCount = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 == 0){
            evenCount ++
        }
    }
    console.log(evenCount)
}
let arr = [1,2,3,4,5,6]
countEvenElements(arr)