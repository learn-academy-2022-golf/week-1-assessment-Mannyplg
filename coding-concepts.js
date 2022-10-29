// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 console.log(colors.push("indigo"))

// a) Your answer: Initalliy thought the name "indigo" would be added to the array. computer logged...5.
//                 Having trouble understanding the relationship between value and index. Reread JavaScript Arrays section from syllabus,
//                 chip at understanding the relationship.
//
//
// b) Verify and explain: 

//                      .push(value)
//                          Adds a value onto the end of an array
//                          Takes an argument of what is to be added
//                          The argument must be a data type recognized by JavaScript
//                      --> The output of the method itself is the length of the new array
//
//  Sited: LEARN Academy, Golf Cohort-22', Syllabus, specifically JavaScript Arrays

// --------------------1) What will this log?

 const cohort = "LEARN 2022"
 console.log(cohort.length)

// a) Your answer: .length method will count the string to include whitespace(s).
//                 There are nine characters in the converted variable.
//                 It should log the number 10.
//                 conole logged: -->10      
//
//
// b) Verify and explain:   Length Property
//
//                            Because arrays are an ordered collection of data, they have a length property. 
//                            The length of an array is dynamic, which means it can change depending on the needs of a developer.
//                            .length is an informational command that returns the number of elements in the array. 
//                            The length is the always the last index of the array plus one.
//
//  Sited: LEARN Academy, Golf Cohort-22', Syllabus, specifically JavaScript Arrays
//
//
//
// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: Asked to find the value in the fourth index.
//                 console logged: --> o
//                 I had the similar answer.
//
// b) Verify and explain:   Accessing Elements
//
//                            One of the many benefits to storing data in arrays is that we can access the individual values. 
//                            Since the indexes are like an address, we can reference the variable that holds the entire array 
//                            and the specific index in square brackets in order to retrieve the value. 
//                            If the index does not exist the output will be undefined.
//
//  Sited: LEARN Academy, Golf Cohort-22', Syllabus, specifically JavaScript Arrays


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer:  The console log should output, the second value in the language variables' index.
//                  console logged: --> Ruby
//
// b) Verify and explain:   Accessors
//                      
//                              Accessor methods do not modify the original array. Accessors return a specific output or a new array. 
//                              In order to keep the output of an accessor method, we need to save it as a variable.
//
//                                  .indexOf(value)
//
//                                      Returns the index of the first instance of a given value
//                                      If the value does not exist within the array, returns -1
//                                      The original array is unchanged
//
//
//  Sited: LEARN Academy, Golf Cohort-22', Syllabus, specifically JavaScript Arrays
//
//
// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:  The .toUpperCase(), is a string method, converting a string to uppercase.
//                  Functions lesson, ran across my mind. The method has two inputs and is expected to capitalize the outputs.
//                  (i.e. [ "SATURDAY", "SUNDAY") ] ).
//                  Looked up toUpperCase() definition on W3Schools.org...currently valid once referenced...
//
// b) Verify and explain: a). console logged: --> console.log(weekendDays.toUpperCase())
//                                                                    ^
//
//                                             TypeError: weekendDays.toUpperCase is not a function
//
//
//                         b). A string is converted to upper case with toUpperCase():
//
// Sited: W3Schools.org, JavaScript String methods.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: What am I asking the computer? What are instructions for computer? To print of what?
//                 Remindined of six data types. Counting on fingers.
//                 console logged:--> number
//                 
// b) Verify and explain:
//                          You can use the typeof operator to find the data type of a JavaScript variable.
//                          The length property returns the length of a string.
//
//                        * You cannot use typeof to determine if a JavaScript object is an array (or a date).
//

//  Sited: W3Schools.org, JavaScript String methods.      



