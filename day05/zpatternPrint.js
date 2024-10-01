// input : 4
// output : 
// *   *   *   *
//         *
//     *
// *   *   *   *

function zpatternPrint(number){
    for(let i = 0;i<number;i++){
        let str = " "
        for(let j=0;j<number;j++){
            if(i==0 || i + j == number-1 || i==number - 1){
                str = str + "*" + " "
            }else{
                str = str + " " + " "
            }
        }
        console.log(str)
    }
}
let number = 4
zpatternPrint(number)