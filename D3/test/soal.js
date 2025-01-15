/** SOAL 1, Buat perintah untuk baca file JSON bernama employee.json
 * yang berisi data JSON dan tampilin semua nama-nama karyawan
 * (readFile)
 */

const fs = require("fs")

const dataKaryawan = fs.readFileSync("./employee.json", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
        return error;
    }
    return data;
})

const karyawan = JSON.parse(dataKaryawan)

karyawan.forEach((kar) => {
    console.log(kar.nama);
})

/** SOAL 2, buat perintah untuk nambahin minimal 1 data JSON kedalam file bernama employee.json
 * (readFile, and replace pake writeFile)
 */

const tambahDataKaryawan = {
    id: 6,
    nama: "Darma",
    age: 27,
    jobDesk: [{
        title: "frontend",
        salary: 11000000
    }],
    hobby: [
        "Memukul",
        "Melukis"
    ]
}

const dataKaryawanBaru = JSON.stringify([...karyawan, tambahDataKaryawan], null, 2)

fs.writeFile("./employee.json", dataKaryawanBaru, "utf-8", (error) => {
    if (error) {
        console.log(error);
        return error
    }
    console.log("Data berhasil ditambahkan");

})

/** SOAL 3, buat perintah untuk nyari karyawan yang usianya diatas atau sama dengan 26
 * dan simpan datanya kedalam file baru bernama karyawan_tuwir.json
 * (readFile & writeFile)
 */

const filterDataKaryawan = karyawan.filter((item) => { return item.age > 26 })
const filterDataKaryawanTuwir = JSON.stringify(filterDataKaryawan, null, 2)

fs.writeFile("./karyawan_tuwir.json", filterDataKaryawanTuwir, "utf-8", (error) => {
    if (error) {
        console.log(error);
        return error
    }
    console.log("Data berhasil ditambahkan");

})

/** Soal 4, buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahan datanya di file baru bernama deleted_data
 * readFile & writeFile
 */

const pecatKaryawan = karyawan.filter((item) => { return item.id !== 1 })
const pecatKaryawanTuwir = JSON.stringify(pecatKaryawan, null, 2)

fs.writeFile("./deleted_data.json", pecatKaryawanTuwir, "utf-8", (error) => {
    if (error) {
        console.log(error);
        return error
    }
    console.log("Data berhasil ditambahkan");

})

// JSON parse buat ngubah array of object jadi JSON
// JSON stringify buat ngubah data json ke string