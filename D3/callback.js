// Callback : fungsi yang dikirim sebagai argumen/parameter ke fungssi lain
// atau fungsi yang manggil fungsi lain

// Fungsi Callback
function printLog(callback) {
    console.log("Callback : ", callback);
};

// Fungsi yang dipanggil fungsi callback
function penjumlahan(a, b) {
    return a + b;
};

function pengurangan(a, b) {
    let kurang = a - b;
    return kurang;
};

printLog(penjumlahan(1, 2))
printLog(pengurangan(3, 2))

function prosesData(a, data) {
    console.log("Memproses data");
    a(data);
}

function tampilkanHasil(data) {
    console.log("Hasil data : ", data);
    
}