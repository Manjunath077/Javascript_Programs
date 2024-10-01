// input : [12, 0, 45, 7, 89, 0, 23, 56, 0, 34, 78, 0, 90]
// output : [12,45,7,89,23,56,34,78,90,0,0,0,0]

function moveZeroToLast(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] == 0 && arr[j] != 0){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp 
            }
        }
    }
    console.log(arr)

}
let arr = [12, 0, 45, 7, 89, 0, 23, 56, 0, 34, 78, 0, 90]
moveZeroToLast(arr)
