const INT_MIN = -(2 ** 31) // -2147483648
const INT_MAX = 2 ** 31 - 1 // 2147483647

export function myAtoi(s: string): number {
    let i = 0;

    // 先頭の空白をスキップ
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 符号の判定
    let sign = 1;
    if (i < s.length && (s[i] === "+" || s[i] === "-")) {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    // 数字を読み取る
    let result = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i])
        i++;
    }

    // 符号を適用
    result *= sign;

    // 32bit の範囲にクランプ
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
};