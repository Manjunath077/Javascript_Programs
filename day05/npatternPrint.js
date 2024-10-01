// input : 4
// output : 
// *           *
// *   *       *
// *       *   *
// *           *     

function npatternPrint(number){
    for(let i = 0;i< number;i++){
        let str = ""
        for(let j = 0;j<number;j++){
            // if(j == 0 || i == j + 1 || j == number-1 )
            if(j == 0 || i == j || j == number - 1){
                str = str + "*" + " "
            }else{
                str = str + " " + " "
            }
        }
        console.log(str)
    }
}
let number = 10
npatternPrint(number)