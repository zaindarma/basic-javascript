// Modil untuk input ke terminal
const r = require("readline");

// Buat interface/tampilan untuk input ke terminal
const inputNama = r.createInterface({
    input: process.stdin, // untuk ngambil input dari keyboard user
    output: process.stdout // untuk nampilin output ke terminal 
});

// Panggil inputannya

// .question : untuk nampilin pertanyaan ke user
// inputNama.question("Masukkan nama: ", (nama) => {
//     console.log(`Halo ${nama}`); // nampilin output
//     inputNama.close(); // menutup input
// });

//  Contoh 2 input
inputNama.question("Masukkan nama: ", (nama) => {
    inputNama.question("Masukkan Umur: ", (umur) => {
        console.log(`Halo ${nama} umur ${umur}`); // nampilin output
        inputNama.close(); // menutup input
    });
});