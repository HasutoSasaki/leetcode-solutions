import { threeSum } from "./solution";

describe('threeSum', () => {
    it('case1', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toBe([[-1, -1, 2], [-1, 0, 1]])
    })

    it('case2', () => {
        expect(threeSum([0, 1, 1])).toBe([])
    })
})