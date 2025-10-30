export function longestPalindrome(s: string): string {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // 奇数長の回文をチェック（中心がi) 例 aba
        const odd = expandAroundCenter(s, i, i)
        // 偶数長の回文をチェック（中心が i と i + 1の間) 例 abba
        const even = expandAroundCenter(s, i, i + 1)

        // 最長を更新
        if (odd.length > longest.length) longest = odd
        if (even.length > longest.length) longest = even
    }

    return longest;
};

function expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }

    return s.substring(left + 1, right)
}