import { romanToInt } from "./solution";

describe('romanToInt', () => {
    it('case1', () => {
        expect(romanToInt('III')).toBe(3)
    })

    it('case2', () => {
        expect(romanToInt('LVIII')).toBe(58)
    })

    it('case3', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994)
    })
})