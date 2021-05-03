/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    verticalCuts.push(0)
    verticalCuts.push(w)
    horizontalCuts.push(0)
    horizontalCuts.push(h)

    horizontalCuts = horizontalCuts.sort((a, b) => a - b)
    verticalCuts = verticalCuts.sort((a, b) => a - b)

    let wMax = 0

    for (let i = 1; i < verticalCuts.length; i++) {
        wMax = Math.max(verticalCuts[i] - verticalCuts[i - 1], wMax)
    }

    let hMax = 0
    for (let i = 1; i < horizontalCuts.length; i++) {
        hMax = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], hMax)
    }

    return wMax * hMax % (1e9 + 7)

};