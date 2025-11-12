import { divide } from "./solution";

describe('divide', () => {
    it('case1', () => {
        expect(divide(10, 3)).toBe(3)
    })

    it('case2', () => {
        expect(divide(7, -3)).toBe(-2)
    })
})