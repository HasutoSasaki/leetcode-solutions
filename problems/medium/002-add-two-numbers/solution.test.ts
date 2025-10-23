import { describe, it, expect } from 'vitest'
import { addTwoNumbers } from "./solution"

// ListNodeクラスの定義（テスト用）
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 配列からLinkedListを作成するヘルパー関数
function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null
    const dummy = new ListNode(0)
    let current = dummy
    for (const val of arr) {
        current.next = new ListNode(val)
        current = current.next
    }
    return dummy.next
}

// LinkedListを配列に変換するヘルパー関数
function listToArray(head: ListNode | null): number[] {
    const result: number[] = []
    let current = head
    while (current !== null) {
        result.push(current.val)
        current = current.next
    }
    return result
}

describe('add-two-numbers', () => {
    it('should handle basic test cases', () => {
        const l1 = arrayToList([2, 4, 3])
        const l2 = arrayToList([5, 6, 4])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([7, 0, 8])
    })

    it('should handle zeros', () => {
        const l1 = arrayToList([0])
        const l2 = arrayToList([0])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([0])
    })

    it('should handle different lengths with carry', () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9])
        const l2 = arrayToList([9, 9, 9, 9])
        const result = addTwoNumbers(l1, l2)
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    })
})