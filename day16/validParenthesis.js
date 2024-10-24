// Given the set of parenthesis find whether it is valid or not
// input : '{}[()]'
// output : true

function validParenthesis(str){
    let stack = []
    let obj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    for(let i=0;i<str.length;i++){
        if(str[i] == '{' || str[i] == '[' || str[i] == '('){
            stack.push(obj[str[i]])
        }else{
            let closing = stack.pop()
            if(str[i] !== closing){
                return false
            }
        }
    }
    return stack.length == 0
}
let str =  '{}[()]'
console.log(validParenthesis(str))