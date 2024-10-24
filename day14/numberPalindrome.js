// Print all the numbers from 101 till 999 which are palindrome
// 101,111,121,131,141,151,161,.......,999

function numberPalindrome(start,end){
    let res = ""
    for(let i=1;i<=9;i++){
        for(let j=0;j<=9;j++){
            console.log(`${i}${j}${i}`)
        }
    }
}
numberPalindrome()