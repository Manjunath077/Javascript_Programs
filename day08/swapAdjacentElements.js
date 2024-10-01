// swap adjacent elements in an array 

function swapAdjacentElements(arr){
    let res = []
    let i=0 ,j=1
    while(i<=arr.length-2 && j<=arr.length-1){
        res.push(arr[j],arr[i])
        i += 2
        j += 2
    }
    console.log(res)
}
let arr = [1,2,3,4,5,6]
swapAdjacentElements(arr)