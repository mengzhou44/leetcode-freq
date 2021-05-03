/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 1
    if (x < 0) {
        x = Math.abs(x)
        sign = -1
    }
    let res = 0

    while (x > 0) {
        let temp = x % 10
        res = 10 * res + temp

        x = Math.floor(x / 10)
    }


    res = res * sign
    if (res > Math.pow(2, 31) - 1 || res < - Math.pow(2, 31)) return 0

    return res
};