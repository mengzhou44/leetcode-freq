var trap = function (height) {
    if (height.length === 1) return 0

    let peakHeight = height[0]
    let peakIndex = 0

    for (let i = 1; i < height.length; i++) {
        if (height[i] > peakHeight) {
            peakHeight = height[i]
            peakIndex = i
        }
    }

    let water = 0
    let leftMostBar = height[0]
    for (i = 0; i < peakIndex; i++) {
        if (height[i] > leftMostBar) {
            leftMostBar = height[i]
        } else {
            water = water + leftMostBar - height[i]
        }
    }


    let rightMostBar = height[height.length - 1]

    for (let i = height.length - 1; i > peakIndex; i--) {
        if (height[i] > rightMostBar) {
            rightMostBar = height[i]
        } else {
            water = water + rightMostBar - height[i]
        }
    }

    return water

};