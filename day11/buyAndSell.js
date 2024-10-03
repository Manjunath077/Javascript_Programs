// Buying and selling the stock 

function buyAndSell(arr){
    for(let i=0;i<arr.length-1;i++){
        let profit = 0
        for(let j=i+1;j<=i+1;j++){
            profit = arr[j] - arr[i]
        }
        console.log(profit)
    }
}
let arr = [2,5,7,1,9]
buyAndSell(arr)