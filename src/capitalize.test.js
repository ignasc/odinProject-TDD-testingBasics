const capitalize = require("./capitalize.js");

test("First leter capitalized", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("best")).toBe("Best");
    expect(capitalize("jeSt")).toBe("JeSt");
    expect(capitalize("GUESt")).toBe("GUESt");
});
