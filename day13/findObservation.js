// You have onservation of n+m  sided dice rolls with each face numbered from 1 to 6. n of the observations went missing and you only have the observation of m rolls. Fortunately you have also calculate the average value of n + m rolls. You have given an integer array rolls of length m where rolls of i(each element inside the array) is the value of the ith observation you are also given 2 integers mean(average) and n.

function addArrayElements(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}



function findObservation(arr,missingValue,average){
    let remaining_sum = average*(arr.length + missingValue) - addArrayElements(arr)
    let newArr = new Array(missingValue).fill(1) // [1,1]
    remaining_sum = remaining_sum - missingValue
    for(let i=0;i<newArr;i++){
        let addition = Math.min(5,remaining_sum)
        newArr[i] = newArr[i] + addition
        remaining_sum = remaining_sum - addition
        if(remaining_sum === 0){
            break
        }
    }
    console.log(newArr)
}

let arr = [2,4,3,1]
let missingValue = 2
let average = 3
findObservation(arr,missingValue,average)
// console.log(addArrayElements(arr))