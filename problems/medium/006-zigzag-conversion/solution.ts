export function convert(s: string, numRows: number): string {
    if (numRows === 1) return s

    const rows = new Array(numRows).fill("")

    let currentRow = 0
    let goingDown = true // 初めは下向き

    // 各文字を処理
    for (const char of s) {
        rows[currentRow] += char

        // 上下によって増減
        currentRow += goingDown ? 1 : -1;

        // 先頭か末尾に来た場合に、上下を変換
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown
        }

    }

    return rows.join("");
};