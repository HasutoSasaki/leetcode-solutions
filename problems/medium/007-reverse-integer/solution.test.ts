import { reverse } from './solution'

describe('reverse', () => {
    it('case1', () => {
        expect(reverse(123)).toBe(321)
    })
    it('case2', () => {
        expect(reverse(-123)).toBe(-321)
    })
    it('case3', () => {
        expect(reverse(1234)).toBe(4321)
    })
    it('case4', () => {
        expect(reverse(12)).toBe(21)
    })
})