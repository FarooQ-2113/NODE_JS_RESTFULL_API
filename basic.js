// Function to check data types
function getDataTypes() {
    // Data types
    var dataTypes = {
    "number" : 1,
    string: 'Hello, World!',
    array: [1, 2, 3, 4, 5],
    object: { key: 'value' }
    };
    return dataTypes;

}


// Function to calculate the sum using a for loop
function sumUsingForLoop(limit) {
//    logic here
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;

}

// Function to calculate the sum using a while loop
function sumUsingWhileLoop(limit) {
    let sum = 0;
    let i = 1;
    while (i <= limit) {
        sum += i;
        i++;
    }
    return sum;
}

// Function to check if a number is positive
function isPositive(num) {
    return num > 0;
}
// Function to check if a number is even or odd
function isEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// Function to check if a string contains a specific substring
function containsSubstring(str, substring) {
    let index = str.indexOf(substring);
    return index !== -1;
}

module.exports = { getDataTypes, sumUsingForLoop, sumUsingWhileLoop, isPositive, isEven, containsSubstring }
