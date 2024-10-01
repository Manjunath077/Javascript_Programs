// 3 find the divisors of the number
function findDivisor(number){
    for(let i=1;i<=Math.floor(number/2);i++){
        if(number % i === 0){
            console.log(i)
        }
    }
}
let number = 28
findDivisor(number)
