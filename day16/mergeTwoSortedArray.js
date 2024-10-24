// Given 2 sorted array merge them into one array
// input : arr1 = [1,2,3] arr2 = [4,5,6]

function mergeTwoSortedArray(arr1,arr2){
    let res = []
    let i =0 , j = 0 
    while(i<arr1.length || j<arr2.length){
        if(i<arr1.length && j<arr2.length){
            if(arr1[i] <= arr2[j]){
                res.push(arr1[i])
                i++
            }else{
                res.push(arr2[j])
                j++
            }
        }
        else{
            if(i<arr1.length){
                res.push(arr1[i])
                i++
            }
            if(j<arr2.length){
                res.push(arr2[j])
                j++
            }
        }
    }
    console.log(res)
    
}

let arr1 = [5,7,8,9] 
let arr2 = [1,4,6]
mergeTwoSortedArray(arr1,arr2)

