export function randomString() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 15; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
}

export function randomChar() {
    const n: number = Math.floor(Math.random() * 62);
    if (n < 10) {
        return n; // 1-10
    }
    if (n < 36) {
        return String.fromCharCode(n + 55); // A-Z
    }
    return String.fromCharCode(n + 61); // a-z;
}
