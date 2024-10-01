// Given an array print the adjacent element such that it's sum is eual to target

function adjacentElementSum(arr,target){
    let sum = 0
    for(let i=1;i<arr.length;i++){
        sum = arr[i] + arr[i-1]
        if(sum == target){
            return [arr[i], arr[i-1]]
        }
    }
    return -1
}
let arr = [4,8,2,1,9]
let target = 10
let answer = adjacentElementSum(arr,target)
console.log(answer)


