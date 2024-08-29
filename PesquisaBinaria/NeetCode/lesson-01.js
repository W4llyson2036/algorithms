// problem: https://neetcode.io/problems/binary-search

function binarySearchNumber(array, target) {
    let left = 0;
    let right = array.length -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return console.log(`index of ${target} is: ${middle}`);
        }
        
        if (array[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return console.log('-1');
}   

binarySearchNumber([-1,0,2,4,6,8], 0);
binarySearchNumber([-1,0,2,4,6,8], 8);
binarySearchNumber([-1,0,2,4,6,8], -1);