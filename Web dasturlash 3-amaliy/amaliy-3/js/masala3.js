// 3-masala. Massivning o'rtacha qiymati
// Massivdagi sonlarni qo'shib, ularning soniga bo'lamiz.

function ortachaQiymat(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let yigindi = 0;

    for (let i = 0; i < arr.length; i++) {
        yigindi = yigindi + arr[i];
    }

    return yigindi / arr.length;
}

console.log(ortachaQiymat([4, 5, 5, 3]));
console.log(ortachaQiymat([]));
console.log(ortachaQiymat([10, 20]));
console.log(ortachaQiymat([7]));