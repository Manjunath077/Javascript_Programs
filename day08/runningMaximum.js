// given an array print the running maximum element 

function runningMaximium(arr){
    let runMax = arr[0]
    let sum = 0
    let res = []
    for(let i=0;i<arr.length;i++){
        if(runMax < arr[i]){
            runMax = arr[i]
        }
        res.push(runMax)
    }
    console.log(res)
}
let arr = [4,8,2,1,9]
runningMaximium(arr)