// input : 4
// output : 
//             A
//         A   B
//     A   B   C
// A   B   C   D

function abcdPatternPrint(number){
    for(let i=0;i<number;i++){
        let str = ""
        let charCode = 65
        for(let j = 0;j<number-i-1;j++){
            str = str + " " + " "
        }
        for(let k = 0;k<i + 1;k++){
            str = str + String.fromCharCode(charCode + k) + " "
        }
        console.log(str)
    }
}

let number = 27
abcdPatternPrint(number)