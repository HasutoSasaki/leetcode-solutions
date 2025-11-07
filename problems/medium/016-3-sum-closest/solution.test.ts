import { threeSumClosest } from "./solution";

describe('threeSumClosest', () => {
    it('case1', () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
    })

    it('case2', () => {
        expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
    })
})