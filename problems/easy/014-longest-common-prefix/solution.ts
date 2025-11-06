// 問題: 文字列配列から最も長い共通の接頭辞（prefix）を見つける
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    // 配列が一つだった場合は、それを返す
    if (strs.length === 1) return strs[0]

    let result = '';
    const baseStr = strs[0]

    for (let i = 0; i < baseStr.length; i++) {
        const char = baseStr[i]

        for (let j = 1; j < strs.length; j++) {
            // 文字列が短かったり、不一致だったら即座に終了
            if (!strs[j][i] || char !== strs[j][i]) return result;
            if (j === strs.length - 1) {
                result += char
            }
        }
    }
    return result;
};