// Given an array replace the duplicate element with the _ 

function replaceDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr[j] = "_"
            }
        }
    }
    console.log(arr)
}

let arr = [1,0,1,2,0,3,3]
replaceDuplicate(arr)