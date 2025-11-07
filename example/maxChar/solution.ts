export function maxChar(s: string): string {
    let result = ''
    let maxCount = 0
    const map = new Map<string, number>()

    for (const char of s) {
        const count = (map.get(char) || 0) + 1
        map.set(char, count)

        if (maxCount < count) {
            maxCount = count
            result = char
        }
    }
    return result
}