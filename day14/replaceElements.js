// Given an array replace all the elements according to the frequency in an array 

function replaceElements(arr){
    let obj = {}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]] += 1 
        }
    }
    // console.log(obj)
    for(let i=0;i<arr.length;i++){
        arr[i] = obj[arr[i]]
    }
    console.log(arr)
}
let arr = [1,1,2,5,12,12,5]
replaceElements(arr)