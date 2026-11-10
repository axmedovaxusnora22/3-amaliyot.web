// 4-masala. Ikkilik sonni o'nlikka aylantirish
// Har bir raqamni 2 ga ko'paytirib, keyingi raqamni qo'shamiz.

function ikkilikdanOnlikka(s) {
    let natija = 0;

    for (let i = 0; i < s.length; i++) {
        natija = natija * 2 + (s[i] === "1" ? 1 : 0);
    }

    return natija;
}

console.log(ikkilikdanOnlikka("1101"));
console.log(ikkilikdanOnlikka("100000"));
console.log(ikkilikdanOnlikka("0"));
console.log(ikkilikdanOnlikka("101"));