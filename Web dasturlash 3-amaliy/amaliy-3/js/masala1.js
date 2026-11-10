// 1-masala. Sonni darajaga ko'tarish
// Sonni n marta o'ziga ko'paytiramiz.

function darajaHisobla(a, n) {
    let natija = 1;

    for (let i = 1; i <= n; i++) {
        natija = natija * a;
    }

    return natija;
}

console.log(darajaHisobla(2, 10));
console.log(darajaHisobla(5, 0));
console.log(darajaHisobla(3, 3));
console.log(darajaHisobla(-2, 3));