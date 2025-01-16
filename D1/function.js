// Function : blok kode JS yang mengerjakan printah/fungsi tertentu
// Rumus fungsi biasa : function namaFunction(parameter/non-params) { }
// Arrow function : const namaFunction = (params/no) => { }
// Contoh fungsi tanpa parameter
function printName() {
    console.log("Zain");
}

printName(); // <= fungsi dipanggil/dijalanin

// Contoh fungsi dengan parameter
// Parameter : sebutan variable yang didefinisikan didalam fungsi
// Fungsi biasanya punya return buat mengembalikan nilai dari hasil fungsi tersebut
function penjumlahan(a, b) {
    let jumlah = a + b;
    return jumlah;
}
console.log(penjumlahan(10, 2));

// Return juga bisa untuk memberhentikan eksekusi program lebih awal jika diperlukan
function cekAngkaPositif(angka) {
    if (angka < 0) {
        return "Angka negatif";
    }
    return "Angka positif";
}
console.log(cekAngkaPositif(5));
console.log(cekAngkaPositif(-2));

// Arrow function : bentuk lain dari deklarasi fungsi
const kaliDua = (a) => {
    return a * 2;
};
console.log(kaliDua(5));