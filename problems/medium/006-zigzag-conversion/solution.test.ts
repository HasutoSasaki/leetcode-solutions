import { describe, it, expect } from 'vitest';
import { convert } from './solution'

describe('convert', () => {
    it('"PAYPALISHIRING" を3行でZigZag変換すると "PAHNAPLSIIGYIR"', () => {
        const input = "PAYPALISHIRING"
        const rows = 3

        const result = convert(input, rows)

        expect(result).toBe("PAHNAPLSIIGYIR")
    })

    it('"PAYPALISHIRING" を4行でZigZag変換すると "PINALSIGYAHRPI"', () => {
        const input = "PAYPALISHIRING";
        const rows = 4

        const result = convert(input, rows)

        expect(result).toBe("PINALSIGYAHRPI")
    })

    it('"A" を1行でZigZag変換すると "A"', () => {
        const input = "A";
        const rows = 1

        const result = convert(input, rows)

        expect(result).toBe("A")
    })

})