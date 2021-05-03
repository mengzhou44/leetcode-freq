/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0

    let max = 0
    let m = grid.length
    let n = grid[0].length
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) {
                max = Math.max(max, dfs(row, col))
            }
        }
    }

    return max


    function dfs(row, col) {
        let count = 0
        if (row < 0 || row >= m || col < 0 || col >= n) return 0
        if (grid[row][col] === 0 || grid[row][col] === 'A') {
            return 0
        }

        grid[row][col] = 'A'
        count = 1

        count += dfs(row + 1, col)
        count += dfs(row - 1, col)
        count += dfs(row, col + 1)
        count += dfs(row, col - 1)

        return count
    }
};