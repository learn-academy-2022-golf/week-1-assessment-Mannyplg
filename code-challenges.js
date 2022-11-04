// ASSESSMENT 1: Coding Practical Questions
// Immanuel Pettigrew Golf...

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines 
// which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
//  - Create an function name fruitRole.
//  - Set two parameters - str1, and str2.
//  - Output which parameter is longer. 
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const fruitRole = (str1, str2) => {
    if(str1.length > str2.length) {
        return `${str1} is longer.`
    }else {
        return `${str2} is longer.`
    }
}

console.log(fruitRole(fruit1, fruit2));//-->banana is longer.
console.log(fruitRole(fruit3, fruit4));//-->cherry is longer.

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: Defined a function name: boilerAlert(), that will determine three conditions of boiling level.
//                        
const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingAlert = (num) => {
    if (num <= temp1) {
        return `${temp1} is below boiling point.`
    } else if (num >= temp2) {
        return `${temp2} is above boiling point.`
    } else if (num === temp3) {
        return `${temp3} is at boiling point.`
    }
}

console.log(boilingAlert(temp1));//-->42 is below boiling point.
console.log(boilingAlert(temp2));//-->350 is above boiling point.
console.log(boilingAlert(temp3));//-->212 is at boiling point.


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: Looked for built-in methods strictly for arrays.
//                        .concat() method mergers two or more arrays to form one.
//                        .push() method adds a value onto the end of an array
//                        decidec to combine both methods to get outcome...

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).push());//--> 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//console.log(currentCohort.reverse.join);//--> errors x2, attempting to chain .reverse() and .join() methods; not functions was error message.
// Didn't want to spend to much time on being stuck; sought resource help...
// Found example on freecodecamp.org using the methods i had been attempting. Following their example...
// Followed function instructions...

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"

const reverseCohrt = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverseCohrt(currentCohort));//--> 2202 floG


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: - last index of value from array
//                        - index v. value
//                        - 8 indexes - 0 based...
//                        - found method that matches the instrctions in syllabus...
//                        - .lastIndexOf(value)...
//                       LEGEND - was thinking this all out loud, no particular order...no longer than twenty mintues tho...

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue1));//-->7
console.log(myNumbers.lastIndexOf(givenValue2));//-->8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: - Looking for an sorting method for arrays...

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort().reverse());//-->[ 82, 80, 79, 77, 76, 73, 72 ]  
console.log(sanDiegoWinterTemperatures.sort().reverse());//-->[ 68, 67, 66, 66, 62, 59, 59 ]

