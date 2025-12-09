const analyzeArray = require("./analyzeArray.js");

test("Analyze array", () => {
    expect(analyzeArray([1, 2, 3])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3,
    });
    expect(analyzeArray([4, 2, 3, 4, 5, 6])).toStrictEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 6,
    });
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
