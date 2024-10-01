// Given a input string with number of times the characters are repeated the task is to print the character according to the count 
// input 
// let str = "a2b3c1d2"
// output 
// aabbbcdd;
function printNumberOfOccurance(str){
    let answer = ""
    let i = 0
    while(i<str.length){
        let ch = str[i]
        let ascii = str.charCodeAt(i)
        if(ascii>=97 && ascii<=122){
            i++
            let newCh = str[i]
            let newAscii = str.charCodeAt(i)
            let num = 0
            while(newAscii>=48 && newAscii <=57){
                num = num * 10 + Number(newCh)
                i++
                newCh = str[i]
                newAscii = str.charCodeAt(i)
            }
            let temp = ''
            while(num!==0){
                temp = temp + ch
                num --
            }
            answer = answer + temp
        }else{
            i++
        }
    }
    return answer
}
let str = "a2b3c4d5"
let answer = printNumberOfOccurance(str)
console.log(answer)