// Given an array print the frequency of occurance of a given element

function printFrequency(arr,ele){
    let frequency = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] == ele){
            frequency++
        }
    }
    console.log(frequency)
}
let arr = [1,2,1,3,4,1]
let ele = 1
printFrequency(arr,ele)