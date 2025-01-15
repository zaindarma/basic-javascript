/** Secara default bahasa pemrograman dieksekusi secara berurut atau (Synchronous)
 * ASYNCHRONOUS : Teknik eksekusi kode secara paralel tanpa harus nunggu eksekusi program yang lain selesai
 * artinya fungsi yang dibuat menggunakan teknik asynchronous akan dijalankan bersamaan dengan kode lainnya
 */

// Fungsi Biasa
function getDataFromServer() {
    // Promise : sebuah objek yang mewakili hasil dari operasi asynchronous
    return new Promise(function(resolve, reject) {
        let data;

        if (data) {
            resolve(data); // Resolve : buat ngembaliin data yang berhasil ditangkep
        } else {
            reject("data gaada") // Reject : ngembaliin error jika data gagal diambil
        }
    });
}

// Async
async function fetchData() {
    // blok tryCatch : error handling untuk menangani error jika data gagal diambil
    try {
        // await : kata kunci dalam async
        const getData = await getDataFromServer();
        console.log("Data yang diterima : ", getData);
    } catch (error) {
        // parameter error : error yang akan ditampilkan jika terjadi kegagalan
        console.log("terjadi kesalahan saat mengambil data : ", error);
    }
}

fetchData()

// CONTOH LAIN Ngambil data dari fake API
async function fetchUserData(userId) {
    try {
        console.log("ceritanya lagi ngambil data dari api");

        // Tampung data yang diambil di var. response
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        // Jika data diambil dari lokal localhost:8000/api/v1/user/$id
        console.log("response, ", response);
        
        // Error handling menggunakan throw exception untuk ngecek apakah response sudah sesuai (kode 200 - 500+)
        // Ngecek apakah statusnya ok/success kode 200
        if (response.status !== 200) {
            throw new Error(`HTTP error! status : ${response.status} ${response.statusText}`)
        }

        // Konversi responsenya ke format JSON
        let user = await response.json();
        // Tampilin datanya
        console.log("Data user by id : ", user);
    } catch (error) {
        // Tampilin error
        // console.log("Error : ", error);
        throw error;
    }
}

fetchUserData(10);