// Given a input string with repeated characters the task is to retun the count of the character repeated 
// input 
// let str = "ababbcdd"
// output 
// a2b3c1d2;

function printCOuntOfCharacter(str){
    let obj = {}
    for(let i=0;i<str.length;i++){
        let ch = str[i]
        if(!obj[ch]){
            obj[ch]=1
        }else{
            obj[ch] = obj[ch] + 1
        }
    }
    let res = ""
    for(let val in obj){
        res = res + val + obj[val]
    }
    return res
}
let str = "ababbcdd"
let answer = printCOuntOfCharacter(str)
console.log(answer)