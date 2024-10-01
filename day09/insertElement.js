// Insert a given element at a given position in an array

function insertElement(arr,position,target){
    for(let i=0;i<arr.length;i++){
        if(i == position-1){
            for(let j=arr.length;j>=position;j--){
                arr[j] = arr[j-1]
            }
            arr[position-1] = target
            break;
        }
    }
    console.log(arr)
}

// let arr = [1,2,3,4,5,6]
// let position = 2
// let target = 1000
// insertElement(arr,position,target)


let str = "apple"
let arr = ['orange',"pineapple",'apple','banana','strawberry']
deleteElement(arr,str)

function deleteElement(arr,str){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == str){
            for(let j=i;j<arr.length;j++){
                arr[j] = arr[j+1]
            }
            arr.length--
            break;
        }
    }
    console.log(arr)
}