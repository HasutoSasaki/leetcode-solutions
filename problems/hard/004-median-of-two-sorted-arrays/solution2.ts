export function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
    // 常に短い方の配列で二分探索する（効率化）
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // 入れ替え
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {
        // nums1 の分割位置
        const partition1 = Math.floor((left + right) / 2);

        // nums2 の分割位置（自動計算）
        // 左側の合計が全体の半分になるように
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        // 境界の値を取得（空の場合は Infinity/-Infinity）
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];

        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        // 正しい分割かチェック
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // ✅ 正しい分割が見つかった！

            // 偶数の場合
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
            // 奇数の場合
            else {
                return Math.max(maxLeft1, maxLeft2);
            }
        }
        // nums1 を左に移動（分割位置を減らす）
        else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        }
        // nums1 を右に移動（分割位置を増やす）
        else {
            left = partition1 + 1;
        }
    }

    // ここには到達しないはず
    return 0;
}