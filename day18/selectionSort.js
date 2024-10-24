// Selection sort 

function selection(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
// let arr = [41,13,18,25,3,33,28,25,38,1]
let arr = [7,5,1,3,6]
console.log(selection(arr))
