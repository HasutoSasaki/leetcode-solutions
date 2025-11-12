export function divide(dividend: number, divisor: number): number {
    const INT_MIN = -(2 ** 31)
    const INT_MAX = 2 ** 31 - 1

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    const isNegative = (dividend < 0) !== (divisor < 0) // XOR 片方だけ負ならtrue
    let quotient = 0;
    let remaining = Math.abs(dividend)
    const absDivisor = Math.abs(divisor)

    while (remaining >= absDivisor) {
        let temp = absDivisor;
        let multiple = 1;

        // temp を2倍にしていくが、オーバーフローしないようチェック
        while (remaining >= temp + temp) {
            temp += temp;      // ビットシフトではなく加算
            multiple += multiple;  // 1, 2, 4, 8, 16...
        }

        quotient += multiple;
        remaining -= temp;
    }

    return isNegative ? -quotient : quotient;
};