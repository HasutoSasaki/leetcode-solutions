import { generateParenthesis } from "./solution";

describe('generateParenthesis', () => {
    it('case1', () => {
        expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
    })

    it('case2', () => {
        expect(generateParenthesis(1)).toEqual(["()"])
    })
})