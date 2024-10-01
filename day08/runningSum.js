// given an array print the running sum  

function runningSum(arr){
    let sum = arr[0]
    let res = []
    for(let i=1;i<arr.length;i++){
        sum += arr[i]
        res.push(sum)
    }
    console.log(res)
}
let arr = [4,8,2,1,9] // output : [12,14,15,24] // [4+8 =12,12 + 2 =14,14 +1 =15, 15 + 9 = 24 ]
runningSum(arr)