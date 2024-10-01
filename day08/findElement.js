// check whether the given element is present inside the array or not

function findElement(arr,element){
    let found = false
    for(let i=0;i<arr.length;i++){
        if(arr[i] == element){
            return true
        }
    }
    return false
}
let arr = [4,8,2,1,9]
let target = 2
let answer = findElement(arr,target)
console.log(answer)