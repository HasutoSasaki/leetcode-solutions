import { longestValidParentheses } from "./solution";

describe('longestValidParentheses', () => {
    it('case1', () => {
        expect(longestValidParentheses("(()")).toBe(2)
    })

    it('case2', () => {
        expect(longestValidParentheses(")()())")).toBe(4)
    })

    it('case3', () => {
        expect(longestValidParentheses("")).toBe(0)
    })
})