// input : 5
// output : 
//         *
//     *       *
// *               *
//     *       *
//         *

function roundedDiamond(number){
    for (let i = 1; i <= number; i++) {
    let output = "";
    // Print spaces
    for (let j = 1; j <= (number - i); j++) {
        output += "   "; // 3 spaces for clear visibility
    }
    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k === 1 || k === 2 * i - 1) {
            output += "*";
        } else {
            output += "   "; // 3 spaces between stars
        }
    }
    console.log(output);
    }
    // --------------------------------------------------
    for (let i = number - 1; i >= 1; i--) {
        let output = "";
        // Print spaces
        for (let j = 1; j <= (number - i); j++) {
            output += "   "; // 3 spaces for clear visibility
        }
        // Print stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === 2 * i - 1) {
                output += "*";
            } else {
                output += "   "; // 3 spaces between stars
            }
        }
        console.log(output);
    }
    
}
let number = 5
roundedDiamond(number)