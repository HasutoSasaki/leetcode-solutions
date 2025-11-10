export function strStr(haystack: string, needle: string): number {
    if (needle === '') return 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;

        // needleの全文字が一致するかチェック。一文字ずつ見ていく
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        // jとneedleの長さが等しいということは全部一致
        if (j === needle.length) {
            return i
        }
    }

    return -1
};
