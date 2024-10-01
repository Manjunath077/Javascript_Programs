// 3. Given the three numbers a,b,c print the middle element among three numbers 
function middleElement(a,b,c){
    if((a > b && a < c) || (a < b && a > c)){
        console.log("A is the Middle element")
    }else if((b > a && b < c) || (b < a && b > c)){
        console.log("B is Middle element")
    }else{
        console.log("C is the Middle element")
    }
}
let a = 20
let b = 5
let c = 30
middleElement(a,b,c)
