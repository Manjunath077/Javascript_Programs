// print the second smallest element

function secondSmallest(arr){
    let firstSmall = Infinity;
    let secondSmall = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < firstSmall){
            secondSmall = firstSmall;  // Update second smallest before changing the smallest
            firstSmall = arr[i];  // Update the smallest
        } else if(arr[i] < secondSmall && arr[i] != firstSmall){
            secondSmall = arr[i];  // Update second smallest only if it's greater than the smallest
        }
    }
    console.log(secondSmall);
}

let arr = [10,2,34,15,89,1]
secondSmallest(arr)