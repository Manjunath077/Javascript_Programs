// a array consisting n elements starting from 0 index each element will be 2*i+1 i is index value we have to pick the two elements you can do the following operations for one element either you can add or substract find the minimum number of operations required to make the array equal.

// if number is even then number of opeartions to be carried out is equal to the sum of odd numbers less than the number
// if number is odd then the number of operations to be carried out is equal to the sum of even numbers less than the number

function findTheNumberOfOperations(number){
    let operations = 0
    if(number%2 == 0){
        for(let i=1;i<number;i=i+2){
            operations += i
        }
    }else{
        for(let j=0;j<number;j=j+2){
            operations += j
        }
    }
    console.log(operations)
}

let number = 6
findTheNumberOfOperations(number)