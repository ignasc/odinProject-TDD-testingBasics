// 65-90 for upper case letters
// 97-122 for lower case letters
const charUpStart = 65;
const charUpEnd = 90;
const charLowStart = 97;
const charLowEnd = 122;

function charShift(char, offset) {
    const charCode = char.charCodeAt(0);

    // lower case
    if (charCode >= charLowStart && charCode <= charLowEnd) {
        return shiftLowerCase(charCode, offset);
    }
    // upper case
    if (charCode >= charUpStart && charCode <= charUpEnd) {
        return shiftUpperCase(charCode, offset);
    }
    // other characters are not changed
    return char;
}

function shiftLowerCase(charCode, offset) {
    const offsetDir = offset < 0 ? -1 : 1;
    let newCharCode = charCode;

    // shift character one step at a time
    for (let i = 0; i < Math.abs(offset); i++) {
        newCharCode += 1 * offsetDir;
        // check if character is out of bounds and reset the number
        if (newCharCode < charLowStart) {
            newCharCode = charLowEnd;
        } else if (newCharCode > charLowEnd) {
            newCharCode = charLowStart;
        }
    }
    return String.fromCharCode(newCharCode);
}

function shiftUpperCase(charCode, offset) {
    const offsetDir = offset < 0 ? -1 : 1;
    let newCharCode = charCode;

    // shift character one step at a time
    for (let i = 0; i < Math.abs(offset); i++) {
        newCharCode += 1 * offsetDir;

        // check if character is out of bounds and reset the number
        if (newCharCode < charUpStart) {
            newCharCode = charUpEnd;
        } else if (newCharCode > charUpEnd) {
            newCharCode = charUpStart;
        }
    }
    return String.fromCharCode(newCharCode);
}

function ceasarCypher(string, offset) {
    let cypheredString = "";

    for (let i = 0; i < string.length; i++) {
        const character = string[i];
        cypheredString += charShift(character, offset);
    }
    return cypheredString;
}

module.exports = ceasarCypher;
