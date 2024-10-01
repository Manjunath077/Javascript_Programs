// Tom is writing a secret message using a string of text 'str'. however he accediently mixed up two important characters that is ch1 and ch2. now all the instance of ch1 have termed into ch2, and ch2 are termed into ch1 our mission is to help tom by creating a function that will re-store the original message.the function should take the string str along with the  characters ch and ch and swap them back to their correct places. so that the message is exactly as tom intended it.

// let str = "apple"
// let ch1 = "a"
// let ch2 = "p"
// let str1 = "paale"

function misPlace(str,ch1,ch2){
    let res = ""
    for(let i=0;i<str.length;i++){
        if(str[i] == ch1){
            res = res + ch2
        }else if(str[i] == ch2){
            res = res + ch1
        }else{
            res = res + str[i]
        }
    }
    console.log(res)
}
let str = "manjunath"
let ch1 = "a"
let ch2 = "n"
misPlace(str,ch1,ch2)