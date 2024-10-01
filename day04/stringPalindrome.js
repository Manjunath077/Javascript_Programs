// Given a string check whether it is a palindrome or not
function stringPalindromeOrNot(str){
    let reverse = ''
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse + str[i]
    }
    return reverse
}
let str = "Among"
let answer = stringPalindromeOrNot(str)
console.log(answer)
// if(answer == str){
//     console.log("palindrome")
// }else{
//     console.log("palindrome")
// }
