//  tryCatch : biasanya buat error handling

function penjumlahan(a, b) {
    try {
        if (a === 0 || b === 0) {
            throw "Nilai tidak valid";
        }
        return a + b;
    } catch (error) {
        console.log(error);
    }
}

console.log("Test 2 : ", penjumlahan(2, 3));
console.log("Test 1 : ", penjumlahan(0, 2));