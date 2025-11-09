export function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(current: string, open: number, close: number) {
        //終了条件: 括弧の数が2n文字になった
        if (current.length === 2 * n) {
            result.push(current)
            return;
        }

        // 選択肢1: '('を追加(n個まで)
        if (open < n) {
            backtrack(current + '(', open + 1, close)
        }

        // 選択肢2: ')'を追加(n個まで)
        if (close < open) {
            backtrack(current + ')', open, close + 1)
        }
    }
    backtrack('', 0, 0)
    return result;
};

/**
 * 考え方
 * 
 * n=2 の場合を手で書いてみる:

""
├─ "(" 
│  ├─ "(("
│  │  └─ "(()" 
│  │     └─ "(())" ✅
│  └─ "()
│     ├─ "()("
│     │  └─ "()()" ✅
│     └─ "())" ← これは無効(')' が多すぎ)
 */