import { countAndSay } from "./solution";

describe('countAndSay', () => {
    it('case1', () => {
        expect(countAndSay(4)).toBe("1211")
    })

    it('case2', () => {
        expect(countAndSay(1)).toBe("1")
    })
})