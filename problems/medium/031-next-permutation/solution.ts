/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]) {
    let pivot = -1;

    for (let i = nums.length - 1; 0 < i; i--) {
        // 右の方が下がる位置
        if (nums[i] > nums[i - 1]) {
            pivot = i - 1
            break;
        }
    }

    if (pivot === -1) {
        // pivotがなかったら、配列全体を反転
        let left = 0;
        let right = nums.length - 1
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--;
        }
        return nums;
    }

    // pivotがあった場合
    let swapIndex = -1;
    for (let i = nums.length - 1; i > pivot; i--) {
        if (nums[i] > nums[pivot]) {
            swapIndex = i;
            break;
        }
    }

    // 交換
    [nums[pivot], nums[swapIndex]] = [nums[swapIndex], nums[pivot]]

    // pivot以降を反転
    let left = pivot + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--;
    }

    return nums
};