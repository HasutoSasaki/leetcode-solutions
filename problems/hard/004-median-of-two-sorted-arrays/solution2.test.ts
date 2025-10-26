import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays2 } from './solution2';

describe('findMedianSortedArrays', () => {
    it('[1,3], [2] の中央値は 2 を返す', () => {
        const result = findMedianSortedArrays2([1, 3], [2]);
        expect(result).toBe(2);
    });

    it('[1,2], [3,4] の中央値は 2.5 を返す', () => {
        const result = findMedianSortedArrays2([1, 2], [3, 4]);
        expect(result).toBe(2.5);
    });
});
