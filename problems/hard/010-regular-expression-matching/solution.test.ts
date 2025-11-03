import { isMatch } from "./solution";

describe('isMatch', () => {
    it('case1', () => {
        expect(isMatch('aa', 'a')).toBe(false)
    })
    it('case2', () => {
        expect(isMatch('aa', 'a*')).toBe(true)
    })
    it('case1', () => {
        expect(isMatch('aa', '.*')).toBe(true)
    })
})