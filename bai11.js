
function filterEvensAndSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6]));
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100]));
