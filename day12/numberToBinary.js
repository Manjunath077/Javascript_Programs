// Given a number convert it to the binary format

function numberToBinary(number){
    let binary = ""
    while(number != 0){
        let rem = number % 2
        binary = rem + binary
        number = Math.floor(number/2)
    }
    console.log(Number(binary))
}
let number = 10
numberToBinary(number)