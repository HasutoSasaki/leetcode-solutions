export function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // 左側がソート済み
            if (nums[left] <= target && target < nums[mid]) {
                // 左側にある！
                right = mid - 1
            } else {
                left = mid + 1
            }

        } else {
            // 右側がソート済み
            if (nums[mid] < target && target <= nums[right]) {
                // 右側にある
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    // 見つからなかった
    return -1
};

