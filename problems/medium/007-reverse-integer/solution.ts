export function reverse(x: number): number {
    let result = 0;
    let num = Math.abs(x); // 絶対値で処理

    while (num > 0) {
        const digit = num % 10 // 最後の桁を取得 123 -> 3
        result = result * 10 + digit // resultを構築 result = 3
        num = Math.floor(num / 10) // 最後の桁を削除 123 -> 12
    }

    // 符号を戻す
    return x < 0 ? -result : result
};