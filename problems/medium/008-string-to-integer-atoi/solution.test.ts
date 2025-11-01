import { myAtoi } from './solution'

describe('myAtoi', () => {
    it('case1', () => {
        expect(myAtoi('42')).toBe(42)
    })
    it('case2', () => {
        expect(myAtoi('   -042')).toBe(-42)
    })
    it('case3', () => {
        expect(myAtoi('1337c0d3')).toBe(1337)
    })
    it('case4', () => {
        expect(myAtoi('0-1')).toBe(0)
    })
    it('case5', () => {
        expect(myAtoi('words and 987')).toBe(0)
    })
    it('case6', () => {
        expect(myAtoi('4193 with words')).toBe(4193)
    })
    it('case7', () => {
        expect(myAtoi('-91283472332')).toBe(-2147483648)
    })
    it('case8', () => {
        expect(myAtoi('21474836460')).toBe(2147483647)
    })
})