function reverseString(string) {
    let reversedString = "";
    for (let i = 1; i <= string.length; i++) {
        const character = string.at(-i);
        reversedString += character;
    }
    return reversedString;
}

module.exports = reverseString;
