export function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left
        const h = Math.min(height[left], height[right])
        const area = width * h;

        maxArea = Math.max(maxArea, area)

        // 短い方を動かす。短いものはボトルネックなため
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};