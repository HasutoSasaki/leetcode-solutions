export function isPalindrome(x: number): boolean {
    //　負の数チェック
    if (x < 0) return false

    // 末尾に0が含まれているかチェック
    if (x % 10 === 0 && x !== 0) return false

    let reversed = 0;
    let original = x;

    while (original > reversed) {
        const digit = original % 10
        reversed = reversed * 10 + digit
        original = Math.floor(original / 10)
    }

    // 偶数桁：1221 || 奇数桁：12321
    return original === reversed || original === Math.floor(reversed / 10)
};