// input : str = "0101010010010010"  target = 3  days = 7
// output : number of times salary received 
// person will receive the salary only if the target is achieved with in the given number of days 
// use sliding window approach to track the str and print the salary

function printSalary(str,target,days){
    let salary = 0
    for(let i=0;i<str.length;i++){
        let count = 0
        for(let j=i;j<days;j++){
            if(str[j] == '1'){
                count++
            }
            if(count >= target){
                salary = salary + 1
            }
        }
    }
    return (`Number of time salary received : ${salary}`)
}
let str = "0101010010011"
let target = 3
let days = 7
let answer = printSalary(str,target,days)
console.log(answer)