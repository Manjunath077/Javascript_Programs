// Check whether the target element is present or not if the element is present in the array then return the index of the element else return the index position where it should be placed

function strictlyIncrease(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `The target element index is : ${i}`;
    } else if (target < arr[i]) {
      return `The target should be present at index : ${i}`;
    }
  }
  return `The target should be present at index : ${arr.length}`
}

let target = 25;
let arr = [1, 2, 3, 5, 6];
console.log(strictlyIncrease(arr, target));

