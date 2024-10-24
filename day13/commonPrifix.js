// Given an array of stings print all the common prefix from the array of string

function commonPrifix(arr){
    let res = ""
    let first = arr[0]
    for(let i=0;i<first.length;i++){
        let character = first[i]
        let isPresent = false
        for(let j=1;j<arr.length;j++){
            let temp = arr[j][i]
            if(temp === character){
                isPresent = true
            }else{
                isPresent = false
                break;
            }
        }
        if(!isPresent){
            break
        }else{
            res = res + character
        }
    }
    return res
}
let arr = ["flower","floor","flow"]
console.log(commonPrifix(arr))

