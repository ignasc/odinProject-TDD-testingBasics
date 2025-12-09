function analyzeArray(array) {
    const length = array.length;
    let average = 0;
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // add up for average calculation
        average += element;

        // check for min value
        if (min > element) {
            min = element;
        }

        // check for max value
        if (max < element) {
            max = element;
        }
    }

    // final calculation on average value
    average = average / length;

    return {
        average: average,
        min: min,
        max: max,
        length: length,
    };
}

module.exports = analyzeArray;
