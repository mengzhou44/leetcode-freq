/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let cur = 0
    let index = 0
    while (index < chars.length) {
        let count = 1
        while (index + 1 < chars.length && chars[index] === chars[index + 1]) {
            index++
            count++
        }

        chars[cur] = chars[index]
        cur++
        if (count > 1) {
            let temp = count.toString().split('')
            for (let ch of temp) {
                chars[cur] = ch
                cur++
            }
        }

        index++
    }

    return cur

}