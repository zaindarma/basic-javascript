// Variabel : tempat penyimpanan data

// let
let nama = "zain";

const umur = 20;

// Tipe Data : jenis data yang bisa disimpan dalam variable
// Tipe Data Primitif : tipe data yang nilainya tunggal (satu)
// String : harus dibungkus kutip, kutip 1 atau kutip 2
let namaKaryawan = "Zain";
console.log("nama karyawan : ", namaKaryawan);

// Integer : tipe data khusus angka, tidak perlu kutip
const salary = 5000000;
console.log("gaji : ", salary);

// Boolean : tipe data yang mengandung nilai kebenaran true or false
let isMarried = false;
console.log("apakah sudah menikah : ", isMarried);

let isTeacher = true;
console.log("apakah seorang guru : ", isTeacher);

// Null : tipe data yang nilainya kosong
const hisChild = null;
console.log("jumlah anak : ", hisChild);

// Undefined : tipe data yang tidak terdefinisikan
let wife;
wife = "Diana";
console.log("apakah punya istri : ", wife);

// Variable let datanya bisa diubah sedangkan const tidak bisa/tetap
// Aturan penulisan variable wajib menggunakan camelCase (kata pertama huruf depannya kecil, kata kedua kapital)

// Tipe data non primitif : tipe data yang nilainya kompleks

// Object : tipe data kompleks yang nyimpen kumpulan data (himpunan) dengan nilai dan tipe data yang berbeda
let karyawan = {
    nama: "Zain",
    salary: 5000000,
    job: "Fullstack"
};
console.log("data karyawan", karyawan); // Gunakan .(titik) untuk mengakses data didalam objek

// Array : tipe data yang nyimpen banyak data. indeks (dalam array) dimulai dari 0
let daftarKaryawan = ['Danu', 123, 'Deni', true];
console.log("list karyawan : ", daftarKaryawan[0]); // Gunakan indeks untuk ngambil data dalam array

// Array of object
let dataKaryawan = [
    { nama: "Deni", umur: 20},
    { nama: "Dina", umur: 30}
];
console.log("list karyawan : ", dataKaryawan);
console.log(dataKaryawan[0].nama);
