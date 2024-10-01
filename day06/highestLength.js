// Given a string find the highest length of non-repeating sub string which is continuous

function highestLength(str){
    let max = -Infinity
    for(let i=0;i<str.length;i++){
        let arr = new Array(256).fill(false)
        for(let j=i;j<str.length;j++){
            if(arr[str.charCodeAt(j)] == "true"){
                break;
            }else{
                max = Math.max(max, j-i+1)
                arr[str.charCodeAt(j)] = "true"
            }
        }
    }
    console.log(max)
}
let str = "ababacdefacde"
highestLength(str)


// let res = ""
// let maxLength = 0
// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length;j++){
//         if(str[i] == str[j]){
//             break;
//         }else if(str[i] != str[i]){
//             res = str[i] + str[j]
//             maxLength++
//         }else if(res.includes(str[j])){
//             res = ""
//         }
//     }
// }