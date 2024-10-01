// print all the possible sustrings of a given word

function subString(str){
    let res = ""
    for(let i=0;i<str.length;i++){
        let first = str[i]
        for(let j=i;j<str.length;j++){
            console.log(str.slice(i,j + 1))
        }
    }
}
let str = "abc"
subString(str)

