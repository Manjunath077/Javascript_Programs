// input : 3
// output : 
//         *   *   *
//     *   *   *
// *   *   *


function printTilte(number){
    for(let i=0;i<number;i++){
        let str = ""
        // for printing the spaces 
        for(let j=0;j<number-i-1;j++){
            str = str + " " + " "
        }
        // for printing the spaces 
        for(let k=0;k<number;k++){
            str = str + "*" + ""
        }
        console.log(str)
    }
}
let number = 5
printTilte(number)


