
// ARRAY MANIPULATION
console.log("=======================================");

const employee = [
    {
        id: 1,
        nama: "Danu",
        age: 25,
        jobDesk: [{ title: "frontend", salary: 12000000}],
        hobby: ["Membaca", "Menulis"]
    },
    {
        id: 2,
        nama: "Dani",
        age: 26,
        jobDesk: [{ title: "frontend", salary: 2000000}],
        hobby: ["Membaca", "Menulis"]
    },
    {
        id: 3,
        nama: "Dina",
        age: 27,
        jobDesk: [{ title: "frontend", salary: 3000000}],
        hobby: ["Membaca"]
    },
    {
        id: 4,
        nama: "Deni",
        age: 26,
        jobDesk: [{ title: "backend", salary: 4000000}],
        hobby: ["Membaca"]
    },
    {
        id: 5,
        nama: "Dian",
        age: 27,
        jobDesk: [{ title: "frontend", salary: 8000000}],
        hobby: ["Membaca"]
    },
];

/** Cari karyawan yang punya hobi "menulis" dan usianya diatas 25 tahun (pake find dan include) */
console.log("=======================================");
const findEmployee = employee.find((data) => data.hobby.includes("Menulis") && data.age > 25);
console.log("Karyawan Hobi Menulis diatas 25 Tahun : ", findEmployee);

/** Tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt (.filter dan .some) */
console.log("=======================================");
const filterEmployee = employee.filter(
    (data) => (data.jobDesk.some((item) => item.title === "backend" && item.salary > 3000000))
);
console.log("Karyawan backend gaji lebih dari 3 juta : ", filterEmployee);

/** Tampilkan nama karyawan yang punya satu hobby pake .filter, .map, .length */
console.log("=======================================");
const satuHobby = employee
.filter((data) => {
    return data.hobby.length <= 1
})
.map((item) => {
    return item.nama
});
console.log("Karyawan dengan satu hobby : ", satuHobby);

/** Cari nama karyawan yang posisinya "frontend" dengan gaji tertinggi, lalu return nama karyawannya (pake .filter, .some, .reduce, .find) */
// employee.filter(blablabla.some === FE) .reduce((max, min) => blablabla.find(blablabla.salary) logic bandingin gaji )
console.log("=======================================");
// const gajiFrontendTertinggi = employee
// .filter((data) => {
//     return data.jobDesk.some((item) => item.title === "frontend")
// })
// .reduce((acc, curr) => {
//     const a = curr.jobDesk.map((job) => job.salary)[0];   
//     return acc > a ? acc : a;
// }, 0);

// const frontEnd = employee
// .find((data) => 
//     data.jobDesk.some((item) => item.salary == gajiFrontendTertinggi)).nama;

// console.log("Karyawan Frontend dengan gaji tertinggi : ", frontEnd);

const findHighestFrontend = employee
.filter((item) => item.jobDesk.some((job) => job.title === "frontend"))
.reduce((highest, current) => {
    const currentSalary = current.jobDesk.find((job) => job.title === "frontend").salary;
    const highestSalary = current.jobDesk.find((job) => job.title === "frontend").salary;
    
    console.log(highestSalary);
    console.log(currentSalary);

    return currentSalary > highestSalary ? current : highest;
})
console.log("Frontend gaji tertinggi : ", findHighestFrontend.nama);

// Fungsi

// MATH
/** Cari nilai tertinggi dari 3 siswa menggunakan Math Object */
console.log("=======================================");
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;
console.log("Math max : ", Math.max(siswa1, siswa2, siswa3));

/** Cari selisih gaji tertinggi dan terendah dari data employee frontend menggunakan (.filter, .method, .spread, .map, .floor) */
console.log("=======================================");
let semuaGajiFrontend = employee
.filter((job) => {
    return job.jobDesk[0].title === "frontend"
})
.map ((data) => {
    return data.jobDesk.find((item) => item.salary).salary
});

let selisihGaji = Math.max(...semuaGajiFrontend) - Math.min(...semuaGajiFrontend)
console.log("Selisih semua gaji : ", Math.floor(selisihGaji));

// KOMBINASI
/** Hitung total gaji semua karyawan setelah dipotong pajak 12% pake reduce dan math .floor */
console.log("=======================================");
let semuaGaji = employee
.map ((data) => {
    return data.jobDesk.find((item) => item.salary).salary
});

let totalSemuaGaji = semuaGaji.reduce((acc, curr) => {  
    return acc + curr;
}, 0);

let pajak = 0.12 * totalSemuaGaji;
let sisaGaji = totalSemuaGaji - pajak;
console.log("Total Gaji : ", totalSemuaGaji);
console.log("Total Gaji Setelah Dipotong Pajak : ", Math.floor(sisaGaji));

/** Tampilkan semua karyawan yang memiliki hobi terbanyak pake map, math.max, filter & length */
// console.log("=======================================");
// const hobbyTerbanyak = Math.max(...employee.map((item) => item.hobby.length));
// const karyawanHobiBanyak = employee
// .filter((data) => data.hobby.length === hobbyTerbanyak)
// .map((item) => item.nama);
// console.log("Karyawan dengan hobi terbanyak : ", karyawanHobiBanyak);

const jumlahHobi = employee.map((emp) => emp.hobby.length);
const maxHobi = Math.max(...jumlahHobi);
const karyawanTerbanyakHobi = employee.filter((emp) => emp.hobby.length === maxHobi);

const result = karyawanTerbanyakHobi.map((emp) => emp.nama).join(", ");
console.log("Karyawan dengan hobi terbanyak : ", result);