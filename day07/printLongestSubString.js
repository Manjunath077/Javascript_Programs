// Given a string find the highest length of non-repeating sub string which is continuous and print the same substring with the same length

function highestLength(str) {
  let max = -Infinity;
  let start = 0
  let end = 0
  for (let i = 0; i < str.length; i++) {
    let arr = new Array(256).fill(false);
    for (let j = i; j < str.length; j++) {
        if (arr[str.charCodeAt(j)] == "true") {
            break;
        } else {
            // max = Math.max(max, j - i + 1);
            // to print the sub string with the highest non-repeating character length
            if(max < j - i + 1){
                max = j - i + 1
                start = i
                end = j
            }
            arr[str.charCodeAt(j)] = "true";
        }
    }
  }
  console.log(max);
  console.log(str.slice(start,end+1)) // slice is used to get the part of the string without including end index
}
let str = "ababacdefacde";
highestLength(str);
