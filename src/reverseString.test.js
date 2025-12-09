const reverseString = require("./reverseString.js");

test("Reverse string", () => {
    expect(reverseString("a")).toBe("a");
    expect(reverseString("abcd")).toBe("dcba");
    expect(reverseString("best")).toBe("tseb");
    expect(reverseString("jeSt")).toBe("tSej");
    expect(reverseString("GUESt")).toBe("tSEUG");
});
