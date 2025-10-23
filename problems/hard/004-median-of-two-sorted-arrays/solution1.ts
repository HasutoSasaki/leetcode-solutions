export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = [...nums1, ...nums2]
    mergedArray.sort((a, b) => a - b)

    const length = mergedArray.length;

    // 奇数の場合
    if (length % 2 === 1) {
        const index = Math.floor(length / 2);
        return mergedArray[index];
    }

    // 偶数の場合
    const rightIndex = length / 2;
    const leftIndex = rightIndex - 1;
    return (mergedArray[leftIndex] + mergedArray[rightIndex]) / 2;

};