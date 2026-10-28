
function findMissingNumber(arr, n) {
    let total = n * (n + 1) / 2;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8));
console.log(findMissingNumber([1, 2, 3, 4], 4));
