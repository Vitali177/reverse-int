module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
        return +(`${n}`.split('').reverse().join(''));
    }
    return +(`${n}`.split('').reverse().join(''));
}
