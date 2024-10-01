// find any 2 index such that the sum of its element is equal to target

function twoNumberSum(arr,target){
    let sum = 0
    let res = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            sum = arr[i] + arr[j]
            if(sum == target){
                // console.log([i,j])
                return [i,j]
            }
        }
    }
    return -1
}
let arr = [4,8,2,1,9]
let target = 10
let answer = twoNumberSum(arr,target)
console.log(answer)

