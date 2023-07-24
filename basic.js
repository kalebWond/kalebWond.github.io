// Function to compare the expected output with the actual output and display the result
function myFunctionTest(expected, functionUnderTest) {
    if (expected === functionUnderTest()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

// Function to find the maximum of two numbers
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Function to find the maximum of three numbers
function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

// Function to check if a character is a vowel
function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

// Function to sum all numbers in an array
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Function to multiply all numbers in an array
function multiply(numbers) {
    var result = 1;
    for (var i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

// Function to reverse a string
function reverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

// Function to find the length of the longest word in an array
function findLongestWord(words) {
    var longestLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length;
        }
    }
    return longestLength;
}

// Function to filter words longer than a given length
function filterLongWords(words, length) {
    var filteredWords = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > length) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}

// Tests for max()
console.log("Testing max():");
console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function () { return max(20, 10); }));
console.log("-----------------------------");

// Tests for maxOfThree()
console.log("Testing maxOfThree():");
console.log(
    "Expected output of maxOfThree(20, 10, 30) is 30 and " +
    myFunctionTest(30, function () { return maxOfThree(20, 10, 30); })
);
console.log("-----------------------------");

// Tests for isVowel()
console.log("Testing isVowel():");
console.log(
    "Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function () { return isVowel('a'); })
);
console.log("-----------------------------");

// Tests for sum()
console.log("Testing sum():");
console.log(
    "Expected output of sum([1, 2, 3, 4]) is 10 and " +
    myFunctionTest(10, function () { return sum([1, 2, 3, 4]); })
);
console.log("-----------------------------");

// Tests for multiply()
console.log("Testing multiply():");
console.log(
    "Expected output of multiply([1, 2, 3, 4]) is 24 and " +
    myFunctionTest(24, function () { return multiply([1, 2, 3, 4]); })
);
console.log("-----------------------------");

// Tests for reverse()
console.log("Testing reverse():");
console.log(
    'Expected output of reverse("jag testar") is "ratset gaj" and ' +
    myFunctionTest("ratset gaj", function () { return reverse("jag testar"); })
);
console.log("-----------------------------");

// Tests for findLongestWord()
console.log("Testing findLongestWord():");
console.log(
    'Expected output of findLongestWord(["apple", "banana", "cherry"]) is 6 and ' +
    myFunctionTest(6, function () { return findLongestWord(["apple", "banana", "cherry"]); })
);
console.log("-----------------------------");

// Tests for filterLongWords()
console.log("Testing filterLongWords():");
console.log(
    'Expected output of filterLongWords(["apple", "banana", "cherry"], 5) is ["banana", "cherry"] and ' +
    myFunctionTest(
        ["banana", "cherry"],
        function () { return filterLongWords(["apple", "banana", "cherry"], 5); }
    )
);
console.log("-----------------------------");

console.log("Modified JSfiddle code output")
// modified JSfiddle code
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b);
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);