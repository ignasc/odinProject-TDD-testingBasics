const calculator = require("./calculator.js");

test("Calculator: add", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(2, 2)).toEqual(4);
    expect(calculator.add(1.1, 2.00001)).toBeCloseTo(3.1);
});

test("Calculator: subtract", () => {
    expect(calculator.subtract(1, 2)).toEqual(-1);
    expect(calculator.subtract(2, 2)).toEqual(0);
    expect(calculator.subtract(5, 2.00001)).toBeCloseTo(3);
});

test("Calculator: multiply", () => {
    expect(calculator.multiply(1, 2)).toEqual(2);
    expect(calculator.multiply(2, 3)).toEqual(6);
    expect(calculator.multiply(1, 2.00001)).toBeCloseTo(2);
});

test("Calculator: divide", () => {
    expect(calculator.divide(1, 0)).toEqual(NaN);
    expect(calculator.divide(1, 2)).toEqual(0.5);
    expect(calculator.divide(2, 2)).toEqual(1);
    expect(calculator.divide(1.1, 2.00001)).toBeCloseTo(0.55);
});
