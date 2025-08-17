// problem 1: Reverse a String

function reverse(str) {
    return str.split("").reverse().join("");
};

// console.log(reverse("hello"));


// Problem 2: count vowels

function countVowels(str) {
    return str.split("").filter(char => "aeiouAEIOU".includes(char)).length;
};

// console.log(countVowels("conventional"));


// Problem 3: Check for Palindrome

function palindrome(str) {
    return str === str.split("").reverse().join("");
};

// console.log(palindrome("bab"));



// Problem 4: Find the Maximum Number

function maxNumber(str) {
    return str.reduce((max, num) => {
        if (num > max) {
            return num;
        } else {
            return max
        }
    }, str[0]);
};

// console.log(maxNumber([2, 4, 6, 34, 55, 3]));


// Problem 5: Remove Duplicates from an Array

function removeDuplicates(str) {
    return str.filter((item, index) => str.indexOf(item) === index);
};

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 9]));


// Problem 6: Sum of All Numbers in an Array

function sumArray(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i];
    };
    return sum;
};

console.log(sumArray([1, 4, 6, 9]));
