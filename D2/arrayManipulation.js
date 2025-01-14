// Penjelasam array secara detail

let myArray = [1,2,3,4,5]

// Cara akses data dalam array berdasarkan indesknya
let nilaiPertama = myArray[0];
let nilaiKedua = myArray[2];
// dst

console.log("nilai pertama array : ", nilaiPertama);
console.log("nilai kedua array : ", nilaiKedua);

// Ngubah nilai array pada indeks tertentu
myArray[2] = 6;
console.log(`Array setelah diubah : ${myArray}`);

// ARRAY METHOD : metode yang digunakan untuk memanipulasi array

// .push : methid array untuk menambahkan data ke baris akhir array
myArray.push(7); // Nambahin nilai 7 ke baris terakhir
console.log("push : ", myArray);

// .shift : method array untuk menghapus data pertama dari array
myArray.shift();
console.log("shift : ", myArray);

// .unshift : method array untuk menambahkan data ke awal array
myArray.unshift(1, 2);
console.log("unshift : ", myArray);

// .pop : method array untuk menghapus data terakhir dari array
let nilaiTerakhir = myArray.pop();
console.log("Pop : ", nilaiTerakhir);
console.log("Popped array : ", myArray);

// .splice : method array untuk menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log("Splice : ", myArray);

// .slice : method array untuk motong(cut) data dalam array
let slice = myArray.slice(3, 5);
console.log("Slice : ", slice);

// .sort : method array untuk mengurutkan data a-z/1-10
myArray.sort();
console.log("Sort : ", myArray);

// .reverse : method array untuk mengurutkan data(descending) dalam array
myArray.reverse();
console.log("Reverse : ", myArray);

// .indexOf : method array untuk nyari INDEX data dalam array
let nilaiCari = 3;
let indeksNilai = myArray.indexOf(nilaiCari);

if(indeksNilai !== -1){
    console.log(`Nilai ${nilaiCari} ditemukan pada indeks : ${indeksNilai}`);
} else{
    console.log(`Nilai ${nilaiCari} tidak ditemukan dalam array`);   
}

// .concat : method array untuk ngegabungin 2 array
let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);
console.log("Concat : ", gabungArray);

// spread operator "... itu untuk melakukan spread"

// .forEach : method array untuk melakukan iterasi/perulangan pada array
myArray.forEach((i) => {
    console.log("forEach : ", i);
});

// .toString : method array untk ngubah data array menjadi string
console.log("toString : ", myArray.toString());

// .toLocaleString : method array untuk ngubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayToLocaleString = price.toLocaleString({
    style: "currency",
    currency: "IDR"
});
console.log("toLocaleString : ", arrayToLocaleString);

// .reduce : method array untuk mengakumulasi nilai array ke dalam satu hasil akhir(mentotalakan data array)
const sum = myArray.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    
    return accumulator + currentValue;
}, 0);
console.log("Reduce : ", sum);

// Manipulasi data of Array Object
const dataSiswa = [
    {
        id: 1,
        name: "Zain",
        age: 22,
        hobby: ["Membaca", "Menulis"]
    },
    {
        id: 2,
        name: "Zainal",
        age: 24,
        hobby: ["Membaca", "Menggambar"]
    },
    {
        id: 3,
        name: "Zianal",
        age: 28,
        hobby: ["Memasak", "Menangin"]
    },
    {
        id: 4,
        name: "Zin",
        age: 30,
        hobby: ["Memukul", "Menyanyi"]
    },
];

// Contoh lain forEach
const forEachDataSiswa = dataSiswa.forEach((data) => {
    console.log("forEach dataSiswa : ", data.name, data.age <= 26);
});

// .map : method array untuk ngubah setiap elemen array menjadi nilai baru atau mapping data tertentu
const getNameFromDataSiswa = dataSiswa.map((item) => {
    return {nama: item.name, umur: item.age};
    // return item.name (manggil mapping normal)
});
console.log("Mapping data nama : ", getNameFromDataSiswa);

// .filter : method array untuk memfilter data array berdasarkan kondisi tertentu
const filterDataSiswa = dataSiswa.filter((item) => {
    // return item.age >= 27 (manggil data filter normal)
    return item.hobby.find((data) => data === "Membaca");
})
console.log("Filter : ", filterDataSiswa);

// .find : method array untuk mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
    return data.name === "Zain";
});
console.log("Find : ", findDataSiswa);

// .length : method array buat menghitung panjang/jumlah data dalam array
let lengthDataSiswa = dataSiswa.length
console.log("Length : ", lengthDataSiswa);

// .every : method array buat ngecek apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = dataSiswa.every((item) => {
    return item.age === 25;
});
console.log("Every : ", everyDataSiswa);