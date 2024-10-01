// given a string convert it to the capital to small or small to capital
function convertCharacter(str){
    let result = ''
    for(let i=0;i<str.length;i++){
        let ascii = str.charCodeAt(i)
        if(ascii >= 97 && ascii <=122){
            result = result + str[i].toUpperCase()

        }else if(ascii >=65 && ascii<=90){
            result = result + str[i].toLowerCase()
        }
    }
    return result
}
let str = ''
let answer = convertCharacter(str)
console.log(answer)