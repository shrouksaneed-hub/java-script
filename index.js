//  1. Convert the string "123" to a number and add 7. 
// • Output Example: 130


console.log(Number("123") + 7)

// ===========================================================================

// 2. Check if the given variable is falsy and return "Invalid" if it is. 
// • Input Example: 0
// • Output Example: "Invalid"

function checkFalsy(value) {
    if (!value) {
        return "Invalid";
    }
    return value;
}

console.log(checkFalsy(0));

// ============================================================================

// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue  
// • Output Example:1, 3, 5, 7, 9

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i - 1)
    }

}

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

// =================================================================================

// 4. Create an array of numbers and return only the even numbers using filter method. 
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

const numbers = [1, 2, 3, 4, 5]

const result = numbers.filter((num, indx) => {
    return num % 2 === 0
})

console.log(result)

// ==================================================================================

// 5. Use the spread operator to merge two arrays, then return the merged array.  
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = [...arr1, ...arr2];

console.log(newArray);

// ===========================================================

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).  
// • Input Example: 2
// • Output Example: “Monday”


const day = 2
switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    default:
        console.log("Saturday")
        break;
}

// =================================================================

// 7. Create an array of strings and return their lengths using map method 
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

const letters = ["a", "ab", "abc"];

const lengths = letters.map((letter) => letter.length);

console.log(lengths);

// ===============================================================================

// 8. Write a function that checks if a number is divisible by 3 and 5. 
// • Input Example: 15
// • Output Example: “Divisible by both”

function divisibilityCheck(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }
    else {
        return "Not divisible by both";
    }
}

console.log(divisibilityCheck(15));

// ===========================================================

// 9. Write a function using arrow syntax to return the square of a number  
// • Input Example: 5
// • Output Example: 25

const square = (num) => { return num * num }
console.log(square(5));

// =====================================================================

// 10.Write a function that destructures an object to extract values and returns a formatted string.
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'


const person = { name: 'John', age: 25 }

function personInfo(person) {
    return (person.name + " is " + person.age + " years old")
}
console.log(personInfo(person))


function personInfo2(person) {
    return `${person.name} is ${person.age} years old`
}
console.log(personInfo2(person))

// =====================================================================

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.  
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15


function sumNumbers(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
        // console.log(sum)
    }

    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5));

// ====================================================================

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.  
// • Output Example: “Success”


// function getSuccess() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// getSuccess().then((message) => {
//     console.log(message);
// });


// ====================================================================

// 13. Write a function to find the largest number in an array.  
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

const arrayNumbers = [1, 3, 7, 2, 4];

function getMax() {
    return Math.max(...arrayNumbers)
}

console.log(getMax())

// ===================================================================

// 14. Write a function that takes an object and returns an array containing only its keys. 
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

const user = {
    name: "John",
    age: 30
}

function getKeys(){
    return Object.keys(user)
}

console.log(getKeys())

// ==================================================================

// 15. Write a function that splits a string into an array of words based on spaces. 
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

const text ="The quick brown fox"

function split(word){
    return word.split(" ")
}
console.log(split(text))

// ====================================================================

