module.exports = function toReadable(number) {
    const allNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty"
    ];

    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    for (let i = 21; i < 1000; i++) {
        if (i < 100)
            allNumbers.push(
                dozens[Math.floor(i / 10)] +
                    (i % 10 == 0 ? "" : " " + allNumbers[i % 10])
            );
        else
            allNumbers.push(
                allNumbers[Math.floor(i / 100)] +
                    " hundred" +
                    (i % 100 == 0 ? "" : " " + allNumbers[i % 100])
            );
    }
    return allNumbers[number];
};
