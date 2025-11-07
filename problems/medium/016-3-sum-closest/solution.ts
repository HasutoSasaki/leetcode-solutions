/**
 * 
 * Given an integer array nums of length n and an integer target, 
 * find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 * 
 * You may assume that each input would have exactly one solution.
 */
export function threeSumClosest(nums: number[], target: number): number {
    let result = 0
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (!result) result = sum
            // sum と targetを比較
            const targetDiff = sum - target
            const oldDiff = result - target
            if (Math.abs(oldDiff) > Math.abs(targetDiff)) {
                result = sum
            }

            if (sum < target) {

                left++
            } else if (sum > target) {
                right--
            } else {
                // 完璧。これ以上いい回答はない
                return sum
            }

        }
    }
    return result
};