/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix === null || matrix.length === 0 ||
        matrix[0].length === 0) {
        return 0
    }

    let m = matrix.length
    let n = matrix[0].length
    let dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }

    let max = 0
    for (let row = 1; row < dp.length; row++) {
        for (let col = 1; col < dp[0].length; col++) {
            if (matrix[row - 1][col - 1] === '1') {
                dp[row][col] = Math.min(dp[row - 1][col - 1],
                    dp[row][col - 1],
                    dp[row - 1][col]
                ) + 1
                max = Math.max(dp[row][col], max)
            }
        }
    }

    return max * max
};