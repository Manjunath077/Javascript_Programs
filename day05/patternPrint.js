// input : 3
// output : 
//       *
//    *  *
// *  *  *

function patternPrint(number){
    for(let i=0;i<number;i++){
        let str = ""
        for(let j=0;j<number-i-1;j++){
            str = str + " " + " "
        }
        for(let k=0;k<i+1;k++){
            str = str + "*" + " "
        }
        // return str
        console.log(str)
    }
}
let number = 4
patternPrint(number)