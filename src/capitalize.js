function capitalize(string) {
    const firstChar = string.slice(0, 1);
    const remainingChar = string.slice(1, string.length);
    return firstChar.toUpperCase() + remainingChar;
}

module.exports = capitalize;
