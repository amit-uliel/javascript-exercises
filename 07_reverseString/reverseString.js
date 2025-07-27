const reverseString = function(string) {
    // first way
    let reversedString = '';

    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }

    return reversedString;

    // second way
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
