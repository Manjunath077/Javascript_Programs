// check whether the given number is palindrome or not 
function palindromeOrNot(number){
    let reverse = 0
    do{
        let reminder = number % 10 
        reverse = reverse * 10 +  reminder 
        number = Math.floor(number / 10)
    }while(number!=0)
    return reverse
}
let number = 121
let answer = palindromeOrNot(number)
if(answer == number){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}
