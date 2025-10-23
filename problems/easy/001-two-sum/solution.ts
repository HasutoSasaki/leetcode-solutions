export function twoSum(nums: number[], target: number): number[] {
    const output: number[] = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            output.push(i, i + 1)
        }
    }
    return output
};

// === AI回答 ====
function _twoSum(nums: number[], target: number): number[] {
    const indexByValue = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const complement = target - value;

        if (indexByValue.has(complement)) {
            // return indices in ascending order (optional)
            const j = indexByValue.get(complement)!;
            return [j, i];
        }

        // store the current value's index for future complements
        indexByValue.set(value, i);
    }

    return [];
}
