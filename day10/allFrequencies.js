// Given an array print the frequency of all the elements in the given array 

function allFrequencies(arr){
    let res = {}
    for(let i=0;i<arr.length;i++){
        if(res[arr[i]]){
            res[arr[i]] += 1
        }else{
            res[arr[i]] = 1
        }
    }
    console.log(res)
}
let arr = [1,2,1,3,4,1]
allFrequencies(arr)