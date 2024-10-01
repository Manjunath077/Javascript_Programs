// Given a number check whether the number is strong number or not
// Strong number : A number which is equal to the sum of the factorial of the digits

function strongNumber(number) {
  let sum = 0;
  let temp = number;
  if (number === 0) {
    sum = 1
  } else {
    while (number != 0) {
      let fact = 1;
      let reminder = number % 10; //5 // 4
      for (let i = reminder; i >= 1; i--) {
        fact = fact * i; 
      }
      sum = sum + fact;  
      number = Math.floor(number / 10); 
    }
  }
  if (sum === temp) {
    console.log("Strong number !");
  } else {
    console.log("Not a strong number !");
  }
}
let number = 145;
strongNumber(number);
