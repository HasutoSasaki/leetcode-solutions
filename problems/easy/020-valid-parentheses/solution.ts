/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */
export function isValid(s: string): boolean {
    const stack: string[] = []
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in map) {
            // 閉じ括弧
            if (stack.pop() !== map[char]) return false
        } else {
            // 開き括弧
            stack.push(char)
        }
    }

    return stack.length === 0;
};