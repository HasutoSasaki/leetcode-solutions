import { letterCombinations } from "./solution";

describe('letterCombinations', () => {
    it('case1', () => {
        expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })

    it('case2', () => {
        expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
    })
})