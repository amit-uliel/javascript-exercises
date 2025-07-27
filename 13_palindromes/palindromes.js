const palindromes = function (string) {
    const s = removeWhiteSpaces(string).toLowerCase(); // bob
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]){
            return false;
        }
    }
    return true;
};

function removeWhiteSpaces(string) {
    let str = "";
    let skipChars = [" ", ".", ",", "!"];
    for (let i = 0; i < string.length; i++) {
        if (!skipChars.includes(string[i])) {
            str += string[i];
        }
    }

    return str;
}

// Do not edit below this line
module.exports = palindromes;
