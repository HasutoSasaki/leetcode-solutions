export function isValidSudoku(board: string[][]): boolean {

    // 各行、列、ボックス用のset
    const rows = new Array(9).fill(0).map(() => new Set<string>())
    const cols = new Array(9).fill(0).map(() => new Set<string>())
    const boxes = new Array(9).fill(0).map(() => new Set<string>())

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j]
            if (num === ".") continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            // 重複チェック
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }

    return true
};