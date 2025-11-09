export function removeDuplicates(nums: number[]): number {
    let j = 0; //ユニークな要素を書き込む位置

    for (let i = 0; i < nums.length; i++) {
        // 新しいユニークな要素を見つけた
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i] // ユニークな要素を前に進める
        }
    }

    return j + 1;
};