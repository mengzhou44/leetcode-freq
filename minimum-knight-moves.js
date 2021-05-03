/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {

    let steps = 0
    let queue = [[0, 0]]
    let visited = new Set()
    let moves = [[2, 1], [1, 2], [-2, 1], [-1, 2], [-2, -1], [-1, -2], [2, -1], [1, -2]];
    while (queue.length > 0) {
        let levelSize = queue.length
        let count = 0
        while (count < levelSize) {
            let [cx, cy] = queue.shift()
            if (cx === x && cy === y) return steps

            for (let move of moves) {
                let nx = cx + move[0]
                let ny = cy + move[1]

                if (!visited.has(`${nx},${ny}`)) {
                    visited.add(`${nx},${ny}`)
                    queue.push([nx, ny])
                }
            }
            count++
        }
        steps++
    }

}


