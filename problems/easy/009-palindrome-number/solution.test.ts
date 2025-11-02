import { isPalindrome } from "./solution";

describe('isPalindrome', () => {
    it('case1', () => {
        expect(isPalindrome(121)).toBe(true)
    })
    it('case2', () => {
        expect(isPalindrome(-121)).toBe(false)
    })
    it('case3', () => {
        expect(isPalindrome(10)).toBe(false)
    })
    it('case4', () => {
        expect(isPalindrome(0)).toBe(true)
    })
    it('case5', () => {
        expect(isPalindrome(123)).toBe(false)
    })
})