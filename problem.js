// problem 1: Reverse a String

function reverse(str) {
    return str.split("").reverse().join("");
};

// console.log(reverse("hello"));


// Problem 2: 

function countVowels(str) {
    return str.split("").filter(char => "aeiouAEIOU".includes(char)).length;
};

// console.log(countVowels("conventional"));
