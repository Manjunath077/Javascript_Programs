// Given array sort it in Increasing order

function sortIncrease(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] >= arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}
let arr = [1,5,6,4,2,3]
sortIncrease(arr)