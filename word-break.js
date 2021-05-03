/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === false) continue
        for (let word of wordDict) {
            if (s.substring(i, i + word.length) === word) {
                dp[i + word.length] = true
            }
        }
    }

    return dp[s.length]

};