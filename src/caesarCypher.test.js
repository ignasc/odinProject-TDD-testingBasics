const ceasarCypher = require("./caesarCypher.js");

test("Ceasar Cypher: cyphering", () => {
    expect(ceasarCypher("^&%", 3)).toBe("^&%");
    expect(ceasarCypher("0 /", 3)).toBe("0 /");
    expect(ceasarCypher("ABC", 3)).toBe("DEF");
    expect(ceasarCypher("ABC", -3)).toBe("XYZ");
    expect(ceasarCypher("aBc", 3)).toBe("dEf");
    expect(ceasarCypher("hij", 1)).toBe("ijk");
    expect(ceasarCypher("h!j", 1)).toBe("i!k");
    expect(ceasarCypher("h!z", 1)).toBe("i!a");
});
