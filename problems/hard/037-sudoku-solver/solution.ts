/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): void {
    solve(board)
}

export function solve(board: string[][]): boolean {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') continue

            // 1 - 9を探す
            for (let num = 1; num <= 9; num++) {
                const char = num.toString()

                // 有効かチェック
                if (isValid(board, i, j, char)) {
                    // 置いてみる
                    board[i][j] = char

                    // 次のマスへ進む
                    if (solve(board)) {
                        return true // 成功
                    }

                    // ダメだったら戻す（バックトラック）
                    board[i][j] = '.'
                }
            }

            // 1 - 9全部ダメだった
            return false
        }
    }

    // 全マス埋まった
    return true
};

function isValid(board: string[][], row: number, col: number, num: string) {
    for (let i = 0; i < 9; i++) {
        // 行チェック
        if (board[row][i] === num) return false

        // 列チェック
        if (board[i][col] === num) return false

        // ボックスチェック
        const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3)
        const boxCol = Math.floor(col / 3) * 3 + (i % 3)
        if (board[boxRow][boxCol] === num) return false;
    }

    return true
}