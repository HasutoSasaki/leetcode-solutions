
/**
 * Given an array nums of distinct integers, return all the possible permutations. 
 * You can return the answer in any order.
 */
export function permute(nums: number[]): number[][] {
    const result: number[][] = []

    /**
     * 
     * @param current 現在の配列
     * @param remaining 残りの配列
     */
    function backtrack(current: number[], remaining: number[]) {
        if (remaining.length === 0) {
            result.push([...current]) // コピーして追加
            return;
        }

        // 残りの数字を1つずつ試す
        for (let i = 0; i < remaining.length; i++) {
            const num = remaining[i]
            // numを選ぶ
            current.push(num)
            // num を除いた残りで再帰
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(current, newRemaining);
            // バックトラック（元に戻す）
            current.pop()
        }
    }

    backtrack([], nums)
    return result;
};

/**
 * 解き方のイメージ
 *        []
      /   |   \
    1     2     3
   / \   / \   / \
  2   3 1   3 1   2
  |   | |   | |   |
  3   2 3   1 2   1
 */