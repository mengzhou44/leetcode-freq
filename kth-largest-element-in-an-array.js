/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let left = 0
    let right = nums.length - 1
    while (true) {
        let pos = partition(nums, left, right)

        if (pos === k - 1) return nums[pos]
        if (pos > k - 1) {
            right = pos - 1
        } else {
            left = pos + 1
        }
    }
};


function swap(array, pos1, pos2) {
    let temp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = temp
}

function partition(array, left, right) {
    let pivot = array[left]
    let l = left + 1
    let r = right
    while (l <= r) {

        if (array[l] < pivot && array[r] > pivot) {
            swap(array, l, r)
            l++
            r--
        }

        if (array[l] >= pivot) {
            l++
        }
        if (array[r] <= pivot) {
            r--
        }
    }
    swap(array, left, r)
    return r
}