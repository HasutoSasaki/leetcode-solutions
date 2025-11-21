import { search } from "./solution";

describe('search', () => {
    it('case1', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
    })

    it('case2', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
    })
    it('case1', () => {
        expect(search([-1], 0)).toBe(-1)
    })
})