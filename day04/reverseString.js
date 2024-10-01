// Given a string reverse it
function reverseString(str){
    let reverse = ''
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse + str[i]
    }
    return reverse
}
let str = "Among"
let answer = reverseString(str)
console.log(answer)


// let ans = str.split().reverse().join()
// console.log(ans)