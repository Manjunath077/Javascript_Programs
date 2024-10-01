// input : 3
// output : 
//             *   
//         *   *   *
//     *   *   *   *   *
// *   *   *   *   *   *   *
function trianglePattern(number){
    for(let i = 0;i < number; i++){
        let str = ""
        for(let j = 0; j < number - i -1;j++){
            str = str + " " + " "
        }
        for(let k = 0;k < 2*i+1;k++){
            str = str + "*" + " "
        }
        console.log(str)
    }
}
let number = 4
trianglePattern(number)