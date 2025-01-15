/**PROMISE : objek yang mewakili hasil dari operasi async */
function dataFromServer() {
    return new Promise(function(resolve, reject) {
        let data = [1, 2, 3, 4];
        if (data) {
            resolve(data);
        } else {
            reject("Data kaga ada")
        }
    });
};

console.log(dataFromServer());

dataFromServer()
    // .then untuk menangani hasil ketika promise terpenuhi/data berhasil diambil
    // result : function yang di eksekusi dengan nilai yang dikasih dari resolve ketika promise berhasil
    // (abc) => {} adalah fungsi atau bisa tulis seperti (function(abc) {}) 
    .then((result) => {
        console.log("Get data : ", result);
    })
    .catch(function(err) {
        // .catch buat nampilin error ketika promise gagal ngambil
        console.log("Gagal : ", err);
    });

console.log("=== PARALEL PROMIS ===");
// Data pertama
const getFirstdata = () => {
    return new Promise((resolve, reject) => {
        resolve("data ke 1");
    });
};
// Data kedua
function getSecondData() {
    return new Promise((resolve, reject) => {
        let data = "2"
            // let data; jika data dibuat undefined maka akan mempengaruhi promise yang lain
        if (data) {
            resolve(data);
        } else {
            reject("Data tidak ditemukan")
        }
    });
}

// Ambil semua data sekaligus
function getAllData() {
    // Promise.all : untuk menjalankan pemanggilan beberapa api sekaligus
    return Promise.all([getFirstdata(), getSecondData()]);
}

getAllData()
    .then((result) => {
        console.log("All Data : ", result); // Result jika semua data berhasil dipanggil
    })
    .catch((err) => {
        console.log(err); // Error kalo ada salah satu aja yang error (error satu error semua)
    });