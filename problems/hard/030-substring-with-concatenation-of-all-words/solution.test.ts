import { findSubstring } from "./solution";

describe('findSubstring', () => {
    it('case1', () => {
        expect(findSubstring('barfoothefoobarman', ["foo", "bar"])).toEqual([0, 9])
    })

    it('case2', () => {
        expect(findSubstring('wordgoodgoodgoodbestword', ["word", "good", "best", "word"])).toEqual([])
    })
    it('case3', () => {
        expect(findSubstring('barfoofoobarthefoobarman', ["bar", "foo", "the"])).toEqual([6, 9, 12])
    })
})