import { strStr } from "./solution";

describe('strStr', () => {
    it('case1', () => {
        expect(strStr('sadbutsad', 'sad')).toBe(0)
    })

    it('case2', () => {
        expect(strStr('leetcode', 'leeto')).toBe(-1)
    })
})