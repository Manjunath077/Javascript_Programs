// count the number of capital letters and small letters in the given string
function capitalAndSmall(str){
    let capital = 0 
    let small = 0
    for(let i = 0;i<=str.length-1;i++){
        let ascii = str.charCodeAt(i)
        if(ascii >= 97 && ascii <=122){
            small++
        }else if(ascii >=65 && ascii<=90){
            capital++
        }
    }
    return [capital,small]
}
let str = "ManjuNath"
let [small,capital] = capitalAndSmall(str)
console.log("Number of small letters",small)
console.log("Number of capital letters",capital)