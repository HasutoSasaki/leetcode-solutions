import { searchRange } from "./solution";

describe('searchRange', () => {
    it('case1', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
    })
    it('case2', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
    })
    it('case3', () => {
        expect(searchRange([], 0)).toEqual([-1, -1])
    })
})