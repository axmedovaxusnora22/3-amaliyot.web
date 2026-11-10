// 5-masala. Ikki massivning umumiy elementlarini topish
// Ikkala massivda ham bor elementlarni yangi massivga joylaymiz.

function kesishma(a, b) {
    let natija = [];

    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) && !natija.includes(a[i])) {
            natija.push(a[i]);
        }
    }

    return natija;
}

console.log(kesishma([1, 2, 3, 4], [3, 4, 5]));
console.log(kesishma(["html", "css"], ["js"]));
console.log(kesishma([1, 2, 2, 3], [2, 2, 4]));
console.log(kesishma([], [1, 2, 3]));