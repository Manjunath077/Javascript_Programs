// 4. given three numbers print them in the ascending order 
// function ascendingOrder(a,b,c){
//     let big1
//     let big2
//     let big3
//     if(a > b && a > c){
//         big1 = a
//     }else if(b > a && b > c){
//         big1 = b
//     }else{
//         big1 = c
//     }
//     // ----------------------------------------------
//     if((a < b && a > c) || (a > b && a < c)){
//         big2 = a
//     }else if((b > a && b > c) || (b < a && b < c)){
//         big2 = b
//     }else{
//         big2 = c
//     }
//     // ----------------------------------------------
//     if((a < b && a < c)){
//         big3 = a
//     }else if(b < a && b < c){
//         big3 = b
//     }else{
//         big3 = c
//     }
//     console.log(big1,big2,big3)

// }

function ascendingOrder(a,b,c){
    let big1
    let big2
    let big3
    if(a > b && a > c){
        big1 = a 
        if(b>c){
            big2 = b
            big3 = c
        }else{
            big2 = c
            big3 = b
        }
    }else if(b > a && b > c){
        big1 = b
        if(a > c){
            big2 = a
            big3 = c
        }else{
            big2 = c
            big3 = a
        }
    }else{
        big1 = c
        if(a > b){
            big2 = a
            big3 = b
        }else{
            big2 = b
            big3 = a
        }
    }
    console.log(big1,big2,big3)
}
let a = 1
let b = 2
let c = 3
ascendingOrder(a,b,c)


