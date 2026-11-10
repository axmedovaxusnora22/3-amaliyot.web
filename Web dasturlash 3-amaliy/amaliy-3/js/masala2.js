// 2-masala. Undosh harflarni sanash
// So'zdagi undosh harflarni sanaymiz.

function undoshlarSoni(s) {
    let sanoq = 0;
    let unlilar = "aeiou";

    for (let i = 0; i < s.length; i++) {
        let harf = s[i].toLowerCase();

        if (harf >= "a" && harf <= "z" &&
            !unlilar.includes(harf)) {
            sanoq++;
        }
    }

    return sanoq;
}

console.log(undoshlarSoni("Kitob"));
console.log(undoshlarSoni("Veb 2026!"));
console.log(undoshlarSoni("Salom dunyo"));
console.log(undoshlarSoni(""));