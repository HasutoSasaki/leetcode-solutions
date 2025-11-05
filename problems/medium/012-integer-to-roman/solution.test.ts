import { intToRoman } from "./solution";

describe('intToRoman', () => {
    it('case1', () => {
        expect(intToRoman(3749)).toBe("MMMDCCXLIX")
    })
    it('case1', () => {
        expect(intToRoman(58)).toBe("LVIII")
    })
    it('case1', () => {
        expect(intToRoman(1994)).toBe("MCMXCIV")
    })
})