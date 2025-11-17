import { nextPermutation } from "./solution";

describe('nextPermutation', () => {
    it('case1', () => {
        expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2])
    })

    it('case2', () => {
        expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3])
    })

    it('case3', () => {
        expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1])
    })
})