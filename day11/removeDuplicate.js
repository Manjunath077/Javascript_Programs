// Given an array remove the duplicate elements

function removeDuplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                for(let k=j;k<arr.length;k++){
                    arr[k] = arr[k+1]
                }
                arr.pop()
                // arr.splice(j,1)
                j--
            }
        }
    }
    console.log(arr)
}
// let arr = [1,0,1,1]
let arr = [1,0,1,2,0,3,3]
removeDuplicate(arr)