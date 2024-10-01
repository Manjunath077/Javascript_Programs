// input : "examintion"
// output : 'e9n'

function printFormat(str){
    let count = 0
    for(let i=1;i<str.length-1;i++){
        count++
    }
    let res = str[0] + count + str[str.length-1]
    console.log(res)
}
let str = "examination is here"
printFormat(str)