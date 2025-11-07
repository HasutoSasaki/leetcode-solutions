import { maxChar } from "./solution";

describe('maxChar', () => {
    it('case1: 明らかに多い文字', () => {
        expect(maxChar('abbccccccccd')).toBe('c')
    })

    it('case2: 最初の文字が最大', () => {
        expect(maxChar('aaaabc')).toBe('a')
    })

    it('case3: 最後の文字が最大', () => {
        expect(maxChar('abcccc')).toBe('c')
    })

    it('case4: 単一文字', () => {
        expect(maxChar('a')).toBe('a')
    })

    it('case5: すべて同じ頻度（最初に出現した文字を返す）', () => {
        expect(maxChar('abc')).toBe('a')
    })

    it('case6: 空文字列', () => {
        expect(maxChar('')).toBe('')
    })

    it('case7: スペースが最も多い', () => {
        expect(maxChar('a b c   ')).toBe(' ')
    })

    it('case8: 数字を含む', () => {
        expect(maxChar('1112223333')).toBe('3')
    })
})