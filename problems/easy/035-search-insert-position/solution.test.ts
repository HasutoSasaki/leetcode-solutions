import { searchInsert } from "./solution";

describe('searchInsert', () => {
    it('case1', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    })

    it('case2', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
    })

    it('case3', () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
    })
})