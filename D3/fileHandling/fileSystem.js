/** di NodeJS, ada modul-modul yang berfungsi untuk file handling
 * salah satunya modil fs(File System) : untuk membuat/baca file
 */

// Import modul nya
const fs = require("fs");

// CREATE : menulis file menggunakan .writeFile("filePath", "isi file", encoding, return)
fs.writeFile("./textFile.txt", "Hallo, aku adalah seorang junior programmersss", "utf-8", (error) => {
    if (error) {
        console.log(error);
        return error;
    }
    console.log("File berhasil disimpan");
});

// .appendFile("filePath", "isi")
let dataDariAPI = " yang ganteng \ndan aku sedang mencari pekerjaan"
fs.appendFile("./textFile.txt", dataDariAPI, "utf-8", (error) => {
    if (error) {
        console.log(error);
        return error;
    }
    console.log("File Berhasil diedit");
})

// .readFile("filePath", encoding, return) : buat ngebaca file
fs.readFile("./textFile.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
        return error;
    }
    console.log("Data yang dibaca : ", data);
})

// .unlimk("filePath", return) : buat ngehapus file
// fs.unlink("./delete.txt", (error) => {
//     if (error) {
//         console.log(error);
//         return error;
//     }
//     console.log("Data disimpan");

// })