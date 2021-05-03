/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []

    for (let ch of s) {
        if ('([{'.includes(ch)) {
            stack.push(ch)
        } else {
            if (stack.length === 0) return false
            if (!isMatch(stack.pop(), ch)) return false
        }
    }

    return stack.length === 0

    function isMatch(ch1, ch2) {
        return (ch1 === '(' && ch2 === ')') ||
            (ch1 === '[' && ch2 === ']') ||
            (ch1 === '{' && ch2 === '}')
    }
};