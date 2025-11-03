export function isMatch(s: string, p: string): boolean {
    if (p === "") return s === "";

    const firstMatch = s !== "" && (s[0] === p[0] || p[0] === '.')

    // * がある場合
    if (p.length >= 2 && p[1] === "*") {
        // 2つの可能性を試す
        return isMatch(s, p.substring(2)) || //*を使わない
            (firstMatch && isMatch(s.substring(1), p)) // *を使う
    }

    return firstMatch && isMatch(s.substring(1), p.substring(1))
};