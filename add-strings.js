/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    if (num1 === '') return num2
    if (num2 === '') return num1

    let array1 = num1.split('')
    let array2 = num2.split('')


    let res = []
    let carry = 0
    while (array1.length > 0 || array2.length > 0) {
        let sum = carry
        if (array1.length > 0) {
            sum += parseInt(array1.pop())
        }
        if (array2.length > 0) {
            sum += parseInt(array2.pop())
        }

        if (sum >= 10) {
            carry = 1
            sum = sum - 10
        } else {
            carry = 0
        }

        res.unshift(sum.toString())
    }

    if (carry === 1) {
        res.unshift('1')
    }

    return res.join('')
};