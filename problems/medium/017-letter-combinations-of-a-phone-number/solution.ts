export function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    const result: string[] = []

    const map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ])

    function backtrack(index: number, current: string) {
        // 全ての数字を処理した
        if (index === digits.length) {
            result.push(current)
            return
        }

        // 現在の数字に対応する文字列を取得
        const letters = map.get(digits[index])!

        // 各文字列を回す
        for (const letter of letters) {
            backtrack(index + 1, current + letter)
        }
    }

    backtrack(0, '')
    return result
};