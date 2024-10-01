function printOccurance(str) {
    let letter = "";
    let number = [];
    let currentNumber = "";
    for (let i = 0; i < str.length; i++) {
        if (
            (str.charCodeAt(str[i]) >= 65 && str.charCodeAt(str[i]) <= 90) ||
            (str.charCodeAt(str[i]) >= 97 && str.charCodeAt(str[i]) <= 122)
        ) {
            letter += str[i];
            if (currentNumber) {
                number.push(currentNumber);
                currentNumber = "";
            }
        } else if (str.charCodeAt(str[i]) >= 48 && str.charCodeAt(str[i]) <= 57) {
            number.push(str[i]);
        }

        if (currentNumber) {
          number.push(currentNumber);
        }
    }
    return [letter, number];
}
let str = "a10b4c5d9";
let answer = printOccurance(str);
console.log(answer);
