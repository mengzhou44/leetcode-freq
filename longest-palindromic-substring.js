/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length

    let res = ''
    for (let i = 0; i < n; i++) {
        let palineDrom1 = getPalindrome(i, i)
        let palineDrom2 = getPalindrome(i, i + 1)

        if (res.length < palineDrom1.length) {
            res = palineDrom1
        }

        if (res.length < palineDrom2.length) {
            res = palineDrom2
        }

    }

    return res

    function getPalindrome(left, right) {
        let current = s[left]
        while (left >= 0 && right < n && s[left] === s[right]) {
            current = s.substring(left, right + 1)
            left = left - 1
            right = right + 1
        }

        return current
    }
};