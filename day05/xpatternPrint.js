// input 


function xpatternPrint(number){
    for(let i=0;i<number;i++){
        let str = ""
        for(let j=0;j<number;j++){
            if(i==j || i + j == number-1){
                str = str + "*" + " "
            }else{
                str = str + " " + " "
            }
        }
        console.log(str)
    }
}
let number = 6
xpatternPrint(number)