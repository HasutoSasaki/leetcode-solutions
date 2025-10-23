export function lengthOfLongestSubstring(s: string): number {
    let maxCount = 0;
    let currentChars = new Set<string>();
    let left = 0;


    // loopで回す
    for (let right = 0; right < s.length; right++) {
        // 重複がなくなるまでleftを進める
        while (currentChars.has(s[right])) {
            currentChars.delete(s[left])
            left++
        }
        //重複がなくなったので追加
        currentChars.add(s[right])
        // 最大値を更新
        maxCount = Math.max(maxCount, currentChars.size);
    }

    return maxCount;
};