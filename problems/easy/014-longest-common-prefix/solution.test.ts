import { longestCommonPrefix } from "./solution";

describe('longestCommonPrefix', () => {
    it('case1', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
    })

    it('case2', () => {
        expect(longestCommonPrefix((["dog", "racecar", "car"]))).toBe("")
    })
    it('case3', () => {
        expect(longestCommonPrefix((["a"]))).toBe("a")
    })


})