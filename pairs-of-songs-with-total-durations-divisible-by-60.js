/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let map = new Map()
    for (let t of time) {
        let r = t % 60
        if (!map.has(r)) {
            map.set(r, 1)
        } else {
            map.set(r, map.get(r) + 1)
        }
    }

    let count = 0
    for (let i = 1; i < 30; i++) {
        if (map.has(i) && map.has(60 - i)) {
            count += map.get(i) * map.get(60 - i)
        }
    }

    for (let i = 0; i <= 30; i = i + 30) {
        if (map.has(i) && map.get(i) > 1) {
            let n = map.get(i)
            count += n * (n - 1) / 2
        }
    }

    return count

};