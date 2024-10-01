// input : 4
// output : 
//             1
//         1   2
//     1   2   3
// 1   2   3   4

function abcdPatternPrint(number){
    for(let i = 0;i<number;i++){
        let str = ""
        for(let j=0;j<number-i-1;j++){
            str = str + " " + " "
        }
        for(let k = 0;k < i + 1;k++){
            str = str + (k + 1) + " "
        }
        console.log(str)
    }
}
let number = 4
abcdPatternPrint(number)