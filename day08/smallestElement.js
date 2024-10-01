// print the smallest element in an array

function smallestElement(arr){
    let smallest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallest)
            smallest = arr[i]
    }
    console.log(smallest)
}
let arr = [1,2,35,69,8,77]
smallestElement(arr)