import { isValid } from "./solution";

describe('isValid', () => {
    it('case1', () => {
        expect(isValid("()")).toBe(true)
    })

    it('case2', () => {
        expect(isValid("()[]{}")).toBe(true)
    })

    it('case3', () => {
        expect(isValid("(]")).toBe(false)
    })

    it('case4', () => {
        expect(isValid("([])")).toBe(true)
    })

    it('case5', () => {
        expect(isValid("([)]")).toBe(false)
    })
})