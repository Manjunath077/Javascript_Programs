// Given a 2-d array rotate it by 90deg
// input : [[1,2,3],[4,5,6],[7,8,9]]
// output :
//  [ 7 4 1
//    8 5 2
//    9 6 3
//  ]

function rotateArray(arr) {
        // let temp = [[0,0,0],[0,0,0],[0,0,0]]
        let temp = new Array(arr.length)
                .fill(0)
                .map((ele) => new Array(arr.length).fill(0));
        for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                        temp[j][arr.length - i - 1] = arr[i][j];
                }
        }
        return temp;
}

let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
];
console.log(rotateArray(arr));

// a array consisting n elements starting from 0 index each element will be 2*i+1 i is index value we have to pick the two elements you can do the following operations for one element either you can add or substract find the minimum number of operations required to make the array equal.