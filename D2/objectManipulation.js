// Data objek
const person = {
    nama: "Zain",
    umur: 30,
    pekerjaan: "Fullstack Developer",
    alamat : {
        jalan: "Jl. H. Jian IIB",
        kota: "Tangerang Selatan",
        negara: "Indonesia"
    },
    hobi: ["Olahraga", "Musik", "Membaca"],
};

// Cara mengakses nilai dalam objek menggunakan titik "."
console.log("nama: ", person.nama);
console.log("negara: ", person.alamat.negara);

// Cara mengakses data array dalam objek
console.log("hobi : ", person.hobi[1]);
// person.hobi.push("Gambar")

// Cara ngubah nilai dalam objek
person.umur = 25
console.log(person);

// Cara menambahkan field baru dalam objek
person.isMarried = false;
console.log(person);

// Cara menghapus field dalam objek
delete person.alamat.jalan;
console.log(person);

// Cara mengakses data objek menggunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);

const test = person.toString();
console.log(test); // Output : Zain, 25, dst

