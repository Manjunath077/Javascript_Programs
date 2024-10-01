// print the ascii value of the character of a given string 
function asciiValue(str){
    for(let i=0;i<=str.length-1;i++){
        let ascii = 0
        ascii = str.charCodeAt(str[i])
        console.log(`Ascii value of ${str[i]} is ${ascii}`)
    }
}
let str = "Aeiou"
asciiValue(str)