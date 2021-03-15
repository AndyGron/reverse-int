module.exports = function reverse (n) {
    let array = String(n).split('');
    for (i = 0; i < array.length; i++) {
        if (array[i] == '-') {
            delete array[i];
        }
    }
    return array.reverse().join('');
}