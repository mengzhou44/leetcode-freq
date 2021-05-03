var twoSum = function (nums, target) {
    if (nums.length === 0) return []

    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(target - nums[i], i)
        } else {
            let index = map.get(nums[i])
            return [i, index]
        }
    }

    return []
};