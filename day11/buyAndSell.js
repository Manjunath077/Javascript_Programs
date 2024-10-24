// Buying and selling the stock 

function buyAndSell(arr){
    let profit = 0
    let min = arr[0]
    for(let i=0;i<arr.length;i++){
        min = Math.min(min,arr[i])
        profit = Math.max(profit,arr[i]-min)
    }
    console.log(profit)
}
let arr = [1,4,3,2,5]
buyAndSell(arr)