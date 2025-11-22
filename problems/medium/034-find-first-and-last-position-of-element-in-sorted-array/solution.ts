export function searchRange(nums: number[], target: number): number[] {
    return [findFirst(nums, target), findLast(nums, target)]
};

function findFirst(nums: number[], target: number) {
    let first = -1
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(right + left / 2);

        if (nums[mid] === target) {
            first = mid
            right = mid - 1 // 左を探す
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return first
}

function findLast(nums: number[], target: number) {
    let last = -1
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(right + left / 2);

        if (nums[mid] === target) {
            last = mid
            left = mid + 1 // 右を探す
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return last
}