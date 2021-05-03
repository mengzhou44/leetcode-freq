/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ])
                while (left < right && nums[left + 1] === nums[left]) {
                    left++
                }
                while (left < right && nums[right - 1] === nums[right]) {
                    right--
                }
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }

    return res
};