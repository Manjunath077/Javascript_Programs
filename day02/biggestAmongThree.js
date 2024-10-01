// 1. Given the three numbers a,b,c print the biggest among three numbers 
function biggestAmongThree(a,b,c){
    if(a > b && a > c){
        console.log("A is biggest")
    }else if(b > a && b > c){
        console.log("B is biggest")
    }else{
        console.log("C is biggest")
    }
}
let a = 5
let b = 5
let c = 3
biggestAmongThree(a,b,c)