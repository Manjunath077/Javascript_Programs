// input : str = "abc"
// output : a,ab,abc,b,bc,c

function printStringRecursion(str,start,cur){
    if(start == str.length){
        return
    }
    for(let i=start;i<str.length;i++){
        cur = cur + str[i]
        console.log(cur)
    }
    return printStringRecursion(str,start + 1,cur)
}
let str = "abc"
let start = 0
let cur = ""
console.log(printStringRecursion(str,start,cur))