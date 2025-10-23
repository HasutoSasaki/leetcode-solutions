import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from './solution'

describe('lengthOfLongestSubstring', () => {
  it('should handle basic test cases', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
  })

  it('should handle edge cases', () => {
    expect(lengthOfLongestSubstring("")).toBe(0)
    expect(lengthOfLongestSubstring(" ")).toBe(1)
    expect(lengthOfLongestSubstring("au")).toBe(2)
  })
})
