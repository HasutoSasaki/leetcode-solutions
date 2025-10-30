import { describe, it, expect } from 'vitest';
import { longestPalindrome } from './solution'

describe('longestPalindrome', () => {
    it('"babad"の最長回文は"bab" または "aba"', () => {
        const input = "babad"

        const result = longestPalindrome(input)

        expect(result.length).toBe(3)
    })

    it('"cbbd" の最長回文は "bb"', () => {
        const input = "cbbd";

        const result = longestPalindrome(input)

        expect(result.length).toBe(2)
    })

    it('一文字の場合', () => {
        expect(longestPalindrome("a")).toBe("a")
    })

    it('全て同じ文字の場合', () => {
        expect(longestPalindrome('aaaa')).toBe('aaaa')
    })

    it('回文が存在しない場合（最初の一文字）', () => {
        expect(longestPalindrome('abc')).toBe('a')
    })

})