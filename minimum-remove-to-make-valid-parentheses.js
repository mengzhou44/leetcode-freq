/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = []
    let list = s.split('')

    for (let i = 0; i < list.length; i++) {
        if (list[i] === '(') {
            stack.push(i)
        } else if (list[i] === ')') {
            if (stack.length === 0) {
                list[i] = ''
            } else {
                stack.pop()
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        list[stack[i]] = ''
    }

    return list.join('')
};