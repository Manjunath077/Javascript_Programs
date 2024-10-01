// Given a string exclude the duplicate and print only the non- repeating character
// input : "aabdefb"
// output : "abdef"

function removeDuplicate(str){
    let noduplicate = ""
    for(let i=0;i<str.length;i++){
        let temp = str[i]
        let isDuplicate = false
        for(let j=0;j<noduplicate.length;j++){
            if(temp == noduplicate[j]){
                isDuplicate = true
                break;
            }
        }
        if(!isDuplicate){
            noduplicate = noduplicate + str[i]
        }
    }
    console.log(noduplicate)
}
let str = "aabdefb"
removeDuplicate(str)


// lexicographically smallest one (or) the first non-repeating element

function usingNewArray(str){
    let arr = new Array(26).fill(0)
    for(let i=0;i<str.length;i++){
        let charcode = str.charCodeAt(i)
        let index = charcode - 97
        arr[index] = arr[index] + 1
    }
    for(let j = 0;j<arr.length;j++){
        if(arr[j] == 1){
            console.log(String.fromCharCode(97 + j))
            break;
        }
    }
}
usingNewArray(str)
