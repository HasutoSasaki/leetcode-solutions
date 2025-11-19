export function longestValidParentheses(s: string): number {
    if (s.length === 0) return 0

    const stack = [-1]
    let maxLen = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        }
        else if (s[i] === ')') {
            stack.pop()

            // スタックが空ではないということは有効なものが見つかったということ
            if (stack.length !== 0) {
                const len = i - stack[stack.length - 1] // 現在位置・スタック top
                maxLen = Math.max(maxLen, len)
            } // スタックが空になったら、新しい基準を追加
            else {
                stack.push(i)
            }
        }
    }


    return maxLen
};