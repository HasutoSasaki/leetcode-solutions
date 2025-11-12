export function findSubstring(s: string, words: string[]): number[] {
    const result = []
    const wordLen = words[0].length;
    const windowSize = wordLen * words.length; // 全単語の長さ

    for (let i = 0; i <= s.length - windowSize; i++) {
        const substring = s.slice(i, i + windowSize);

        // ここで substring が条件を満たすかチェック
        if (isValid(substring, words, wordLen)) {
            result.push(i)
        }
    }

    return result;
};

function isValid(substring: string, words: string[], wordLen: number): boolean {
    const substringMap = new Map<string, number>()
    const wordsMap = new Map<string, number>()

    for (const word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1)
    }


    let index = 0;
    while (index < substring.length) {
        const string = substring.slice(index, index + wordLen)
        substringMap.set(string, (substringMap.get(string) || 0) + 1)
        index += wordLen
    }

    // まずはサイズを比較して違えば、その時点で false
    if (substringMap.size !== wordsMap.size) return false;

    // 対象のワードと、部分文字列のマップを比較して、各単語の回数が同じなら通る
    for (const [word, count] of wordsMap) {
        if (substringMap.get(word) !== count) {
            return false;
        }
    }

    return true
}