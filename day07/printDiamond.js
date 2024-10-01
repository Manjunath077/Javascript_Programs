// input : 5
// output : 
//         *
//     *   *   *
// *   *   *   *   *
//     *   *   *
//         *

function printDiamond(number){
    for(let i=0;i<number;i++){
        let str = ""
        if(i<=Math.floor(number/2)){
            for(let j=0;j<Math.floor(number/2)-i;j++){
                str += " " + " "
            }
            for(let k=0;k<2*i+1;k++){
                str += "*" + " "
            }
        }else if(i>= Math.floor(number/2)){
            for(let j=0;j<i-Math.floor(number/2);j++){
                str += " " + " "
            }
            for(let k=0;k<2*(number-i)-1;k++){
                str += "*" + " "
            }
        }
        console.log(str)
    }
}

// given only odd values
let number = 5
printDiamond(number)