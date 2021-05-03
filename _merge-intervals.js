/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) return intervals

    intervals = intervals.sort((a, b) => a[0] - b[0])
    let array = []
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] < intervals[i][1]) {
            if (prev[1] < intervals[i][0]) {
                array.push(prev)
                prev = intervals[i]
            } else {
                prev[1] = intervals[i][1]
            }
        }
    }

    array.push(prev)
    return array
};