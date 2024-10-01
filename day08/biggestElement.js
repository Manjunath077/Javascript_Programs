// print the biggest element in an array

function biggestElement(arr){
    let biggest = 0;
    for(let i=0;i<arr.length;i++){
        if(biggest < arr[i]){
            biggest = arr[i]
        }
    }
    console.log(biggest)
}

let arr = [12,2,35,690,8,77,80]
biggestElement(arr)