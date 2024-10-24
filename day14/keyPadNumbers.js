// Given a keypad arrangement print the sequence as given below
// 1:"abc",2:"def",3:"ghi",4:"jkl",5:"mno",6:"pqr",7:"stu",8:"vwx",9:"yz"
// input : 56
// output : nop qrs (nq,nr,ns,oq,or,os,pq,pr,ps)

function keyPadNumbers(keypad,number){
    let n1 = Math.floor(number/10)  // for number 5 
    let n2 = number % 10 // for number 6
    let str1 = keypad[n1]
    let str2 = keypad[n2]
    let str = ""
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            str += str1[i] + str2[j] + " "
        }
    }
    console.log(str)
}

let keypad = {
    1:"abc",
    2:"def",
    3:"ghi",
    4:"jkl",
    5:"mno",
    6:"pqr",
    7:"stu",
    8:"vwx",
    9:"yz"
}
let number = 56
keyPadNumbers(keypad,number)