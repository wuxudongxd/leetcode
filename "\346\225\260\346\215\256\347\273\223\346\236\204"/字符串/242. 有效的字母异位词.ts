export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    s = s.split('').sort((a, b) => a.localeCompare(b)).join("")
    t = t.split('').sort((a, b) => a.localeCompare(b)).join("")
    return s === t;
}