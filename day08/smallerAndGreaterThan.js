// print the element from an array such that it should be greater than left element and smaller than right element

function smallerAndGreaterThan(arr){
    for(let i=0;i<arr.length;i++){
        if(i==0){
            if(arr[i]>arr[i+1]){
                return arr[i]
            }
        }
        else if(i == arr.length-1)
        {  
            if(arr[i] > arr[i-1]){
                return arr[i]
            }
        }
        else{
            if(arr[i] > arr[i-1] && arr[i] < arr[i+1])
            {
                return(arr[i])
            }
        }
    }
    return "No element found"
}

let arr = [4,8,2,1,9]
let res = smallerAndGreaterThan(arr)
console.log(res)