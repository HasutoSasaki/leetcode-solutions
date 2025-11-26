export function countAndSay(n: number): string {
    if (n === 1) return '1'

    let result = "1"

    for (let i = 2; i <= n; i++) {
        result = getNext(result)
    }

    return result
};

function getNext(s: string): string {
    let result = ""
    let i = 0;

    while (i < s.length) {
        const char = s[i]
        let count = 1

        while (i + count < s.length && s[i + count] === char) {
            count++;
        }

        result += count.toString() + char
        i += count;
    }

    return result;
}