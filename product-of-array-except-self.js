/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftArray = []
    let rightArray = []
    let product = 1
    leftArray.push(product)
    for (let i = 1; i < nums.length; i++) {
        product = product * nums[i - 1]
        leftArray.push(product)
    }

    rightArray.push(1)
    product = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        product = product * nums[i + 1]
        rightArray.unshift(product)
    }


    let res = []
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftArray[i] * rightArray[i]
    }

    return res
};