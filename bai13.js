
function calculateGrade(arr) {
    if (arr.length === 0) {
        return "F";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade([85, 90, 95]));
console.log(calculateGrade([70, 75, 80]));
console.log(calculateGrade([50, 55, 60]));
