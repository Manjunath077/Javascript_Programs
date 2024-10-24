// insertion sort 

// function insertion(arr){
//     let j;
//     for(let i=1;i<arr.length;i++){
//         let curr = arr[i]
//         for(j=i-1;j>=0 && arr[j] > curr;j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = curr
//     }
//     return arr
// }
// let arr = [5,2,4,6,1,3]
// console.log(insertion(arr))


function insertionSort(arr1){
    for(let i=1;i<arr1.length;i++){
        let nti = arr1[i]
        let j = i-1
        while(j>=0 && arr1[j] > nti){
            arr1[j+1] = arr1[j]
            j = j - 1
        }
        arr[j+1] = nti
    }
    return arr1
}
let arr1 = [4,5,8,6,3]
console.log(insertionSort(arr1))