// 2. Given the three numbers a,b,c print the smallest among three numbers 
function smallestAmongThree(a,b,c){
    if(a < b && a < c){
        console.log("A is smallest")
    }else if(b < a && b < c){
        console.log("B is smallest")
    }else{
        console.log("C is smallest")
    }
}
let a = 1.2
let b = 2.2
let c = 2.5
smallestAmongThree(a,b,c)