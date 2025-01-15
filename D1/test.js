// Soal 1, buat operasi matematika dengan output seperti dibawah ini
let a = 1;
let b = 2;
let c = 3;
let penjumlahan = a + b + c;
let pengurangan = a - b - c;
let perkalian = a * b * c;
let pembagian = a / b / c;
let modulus = a % b % c;
let jumlahKaliBagi = a + b * c / c;
let total = penjumlahan + pengurangan + perkalian + pembagian + modulus + jumlahKaliBagi;
console.log("==================");
console.log("====ZAIN DARMA====");
console.log("==================");
console.log("X = ", a);
console.log("Y = ", b);
console.log("Z = ", c);
console.log("Penjumlahan = ", penjumlahan);
console.log("Pengurangan = ", pengurangan);
console.log("Perkalian = ", perkalian);
console.log("Pembagian = ", pembagian);
console.log("Modulus = ", modulus);
console.log("Jumlah-kali-bagi = ", jumlahKaliBagi);
console.log("Total = ", total);
console.log("==================");

// Soal 2, Hitung berapa detik dalam 30 hari menggunakan operator matematika
let detik = 60 * 60 * 24 * 30;
console.log("Jumlah detik dalam 30 Hari : ", detik, "detik");
console.log("==================");

/* Soal 3, Cari hobby didalam data yang dikirim dari parameter user
jika objek user atau properti hobby tidak ditemukan maka return "Hobby tidak ada" */
function findUserHobby(user) {
    let hobby = user && user.hobby;
    return hobby || "Hobby tidak ada";
};

let user1 = {
    nama: "owi kun",
    age: 25,
    hobby: ["Membaca", "Menulis"],
};

let user2 = {
    nama: "mega chan",
    age: 25,
};
console.log(findUserHobby(user1));
console.log(findUserHobby(user2));

// LOGIC

/** Soal 4, Buat logic switch case untuk menampilkan nama hari pake b.ing berdasarkan input angka 1-7
 * Jika angka yang dimasukkan diluar rentang tersebut, maka tampilkan pesan "Input tidak valid"
 */
console.log("==================");
let namaHari = 2; // Nilai input yang akan dikirim ke switch case

switch (namaHari) {
    case 1: // Kondisi
        {
            console.log("Monday");
            break;
        }
    case 2:
        {
            console.log("Tuesday");
            break;
        }
    case 3:
        {
            console.log("Wednesday");
            break; // Menghentikan eksekusi ketika kondisi terpenuhi
        }
    case 4:
        {
            console.log("Thursday");
            break;
        }
    case 5:
        {
            console.log("Friday");
            break;
        }
    case 6:
        {
            console.log("Saturday");
            break;
        }
    case 7:
        {
            console.log("Sunday");
            break;
        }

    default: // Kondisi jika tidak ada case yang terpenuhi/semua case tidak terpenuhi
        {
            console.log("input tidak valid");
            break;
        }
}

/** Soal 5, Buat logic if yang menentukan statuss kelulusan orang berdasarkan nilai yang didapat
 * jika nilai lebih dari atau sama dengan 80, maka status nya "Anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70, dan kurang dari 80, maka statusnya "Lulus dengan baik",
 * jika nilai lebih dari atau sama dengan 60, dan kurang dari 70, maka statusnya "Lulus",
 * jika nilai kurang dari 60, maka statusnya "tidak lulus"
 */
console.log("==================");
let nilaiTes = 82
if (nilaiTes >= 80) {
    console.log("Anda lolos dengan sangat baik!");
} else if (nilaiTes >= 70) {
    console.log("Lulus dengan baik");
} else if (nilaiTes >= 60) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}

/** Soal 6, Gunakan Nested if
 * Buat logic untuk nentuin nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 MAPEL (MTK, Fisika, Kimia)
 * Jika nilai yang dimasukkan tidak valid(diluar rentang 0-100), maka statusnya "Nilai tidak valid"
 * Jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya "Selamat anda lulus dengan baik"
 * Jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan 60, maka statusnya "Anda lulus"
 * Jika nilai rata-rata lebih kecil dari 60, maka statusnya "Anda tidak lulus"
 */
console.log("==================");
let matematika = 80;
let fisika = 80;
let kimia = 80;

let nilaiTotal = matematika + fisika + kimia;
let nilaiRataRata = nilaiTotal / 3;
if (nilaiRataRata >= 60) {
    if (nilaiRataRata >= 80) {
        console.log("Selamat anda lulus dengan baik");
    } else {
        console.log("Anda lulus");
    }
    if (nilaiRataRata > 100) {
        console.log("Nilai tidak valid");
    }
} else {
    console.log("Anda tidak lulus");
}

/** Soal 7, Buat logic untuk menentukan jenis bilangan(positif, negatif, atau nol)
 * dari nilai yang dimasukkan oleh user menggunakan ternary operator
 * output yang diharapkan : ("Angka 7 adlaah bilangan positif")
 */
console.log("==================");
let bilangan = 1
let jenisBilangan = bilangan > 0 ? `Angka ${bilangan} adalah bilangan positif` : bilangan < 0 ? `Angka ${bilangan} adalah bilangan negatif` : `Angka ${bilangan} adalah bilangan nol`;
console.log(jenisBilangan);

/** Soal 8, nested if
 * buat program untuk menghitung total harga pembelian barang pake nested if
 * jika total harga sama dengan 0 maka tampilin pesan "Harga tidak valid"
 * jika total pembelian melebihi 1 juta, maka berikan diskon sebesar 10%,
 * sedangkan jika total pembelian melebihi 500rb maka diberikan diskon sebesar 5%, jika dibawah 500 ribu tidak diberikan diskon.
 * tampilkan pesan berikut:
 * "Anda membeli <jumlahBarang> <namaBarang> dengan harga <hargaBarang> per-<namaBarang>, Total harga sebelum diskon = <totalHarga>"
 * lalu cek, jika dapat diskon, maka tampilin "Selamat! Anda mendapatkan diskon sebesar %"
 * tampilin pesan "Anda belum dapat diskon, harga total = <hargaSetelahDiskon>"
 */
let namaBarang = "Oli Samping"
let hargaBarang = 50000;
let jumlahBarang = 50;
const totalHarga = hargaBarang * jumlahBarang;
const Diskon1 = 0.1 * totalHarga;
const Diskon2 = 0.05 * totalHarga;
const totalDiskon1 = totalHarga - Diskon1;
const totalDiskon2 = totalHarga - Diskon2;

console.log("==================");
console.log(`Anda membeli ${jumlahBarang} ${namaBarang}`);
console.log(`dengan harga Rp.${hargaBarang} per-${namaBarang}`);




if (totalHarga > 500000) {
    if (totalHarga > 1000000) {
        console.log(
        `Selamat! Anda mendapatkan diskon sebesar 10%
        Total harga sebelum diskon = Rp.${totalHarga},
        Total harga setelah diskon = Rp.${totalDiskon1}`
        );
    } else {
        console.log(
        `Selamat! Anda mendapatkan diskon sebesar 5%
        Total harga sebelum diskon = Rp.${totalHarga},
        Total harga setelah diskon = Rp.${totalDiskon2}`
        );
    }
    if (totalHarga == 0) {
        console.log("Harga tidak valid");
    }
} else {
    console.log(
    `Maaf Anda belum dapat diskon, harga total = Rp.${totalHarga}`
    );
}

// LOOP

/** Soal 9 : For loop
 * buat program untuk mencari bilangan prima dari 1 - 25 menggunakan for loop
*/
console.log("==================");
let n = 25;
let prima = 2;

while (prima <= n) {
    let isPrime = true;
    let j = 2;

    while (j < prima) {
        if (prima % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }

    if (isPrime) {
        console.log(prima);
    }
    prima++;
}

/** Soal 10 : For loop
 * buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
 */
console.log("==================");
const dataBilanganBulat = [2, 4, 6, 8, 10];

function rataRata(dataBilanganBulat) {
    let total = 0;
    for (let i = 0; i < dataBilanganBulat.length; i++) {
        total += dataBilanganBulat[i];
    }
    return total / dataBilanganBulat.length;
}
console.log("Rata-rata data bilangan bulat", rataRata(dataBilanganBulat));


/** Soal 11 : For loop
 * buat function untuk menghitung jumlah huruf kapitalpada sebuah string menggunakan function
 */
console.log("==================");
let string1 = "Hello World";
let string2 = "Kiw, Gimana Kabarnya";
let string3 = "JAVaScRipT";

function hitungKapital(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string [i].toUpperCase()) {
            count++;
        }
    }
    return count;
}
console.log(hitungKapital(string1));
console.log(hitungKapital(string2));
console.log(hitungKapital(string3));


/** Soal 12 : For loop
 * buat fungsi untuk mencari nilai tertinggi dari sebuah array
 */
console.log("==================");
const nilaiTertinggi = [1, 34, 21, 54, 6567, 234, 65865, 98764, 23, 453];

function nilaiMaksimal(nilaiTertinggi) {
    let maksimal = nilaiTertinggi[0];
    let nomor = 0;
    for (let i = 0; i < nilaiTertinggi.length; i++) {
        nomor = nilaiTertinggi[i];
        maksimal = Math.max(maksimal, nomor);
    }
    return maksimal;
}
console.log(nilaiMaksimal(nilaiTertinggi));


/** Soal 13 : for
 * buat fungsi untuk membuat piramid(segitiga sama kaki) yang terbuat dari bintang "*"
 * dengan jumlah baris yang ditentukan oleh user melalui parameter fungsi
 */
console.log("==================");
const piramid = (n) => {
    for(let i = 1; i <= n; i++) {
       let j = "";
       for(let k = 1; k <= (2 * n - 1); k++) {
       k >= (n + 1 - i) && k <= (n - 1 + i) ? j += "*" : j += " ";
       }
       console.log(j);
    }
 };
 piramid(8);