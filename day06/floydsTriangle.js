// input : 4
// output : 
// 1
// 2   3
// 4   5   6
// 7   8   9   10
 
function floydsTriangle(number){
    let count = 0
    for(let i=0;i<number;i++){
        let str = " "
        for(let j=0;j<=i;j++){
            count++
            str = str + count + " "
        }
        console.log(str)
    }
}
let number = 4
floydsTriangle(number)