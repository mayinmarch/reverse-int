module.exports = function reverse (n) {
    let numbers = [];
    let reversed = 0;
    n = Math.abs(n);

    while (n > 0) {
        numbers.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (let i = 0; i < numbers.length; i ++) {
        reversed +=  numbers[i] * Math.pow(10, (numbers.length - i) - 1);
    }
    return reversed;
}
