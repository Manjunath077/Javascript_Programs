// print the second biggest element

function secondBiggest(arr){
    let secondBig = -Infinity
    let firstBig = arr[0]
    for(let i=0;i<arr.length;i++){
        if(secondBig < arr[i] && arr[i] < firstBig){
            secondBig = arr[i]
        }else if(arr[i] > firstBig){
            secondBig = firstBig
            firstBig = arr[i]
        }
    }
    console.log(secondBig)
}
let arr = [1,2,3,40,5]
secondBiggest(arr)