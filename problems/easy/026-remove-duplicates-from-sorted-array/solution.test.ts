import { removeDuplicates } from "./solution";

describe('removeDuplicates', () => {
    it('case1', () => {
        expect(removeDuplicates([1, 2, 2])).toEqual(2)
    })
    it('case2', () => {
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5)
    })

    it('case3', () => {
        expect(removeDuplicates([-2, -2, -1, -1, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(7)
    })

    it('case4', () => {
        expect(removeDuplicates([1, 1, 2])).toEqual(2)
    })
})