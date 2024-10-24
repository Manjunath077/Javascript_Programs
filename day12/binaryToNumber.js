// Given a binary convert them into number
// 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0 = 10

function binaryToNumber(binary){
    let sum = 0
    let power = 0
    while(binary != 0){
        let rem = binary % 10
        sum = sum + rem * (2**power)
        power++
        binary = Math.floor(binary/10)
    }
    console.log(sum)
}
let binary = 1010
binaryToNumber(binary)