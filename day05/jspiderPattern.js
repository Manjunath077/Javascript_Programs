// input : JSPIDER
// output : 
    // J                       J
    //     S               S
    //         P       P       
    //             I   
    //         D       D
    //     E               E
    // R                       R    


function jspiderPattern(str){
    let num = str.length
    for(let i=0;i<str.length;i++){
        let str1 = ""
        for(let j=0;j<str.length;j++){
            if(i == j || i + j == num - 1){
                str1 = str1 + str[i] + " "
            }else{
                str1 = str1 + " " + " "
            }
        }
        console.log(str1)
    }
}
let str = "JSPIDER"
jspiderPattern(str)
