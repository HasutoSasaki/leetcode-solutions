import { maxArea } from "./solution";

describe('maxArea', () => {
    it('case1', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    })
    it('case2', () => {
        expect(maxArea([1, 1])).toBe(1)
    })

})