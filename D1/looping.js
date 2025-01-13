// Looping : perulangan yang bertujuan untuk memeriksa data untuk kondisi tertentu
// While loop
let startCondition = 1; // Nilai awal perulangan
while (startCondition < 5) {
    console.log("While loop ke-", startCondition); // Output
    startCondition++; // Increment : menambahkan 1 ke nilai startCondition hingga memenuhi kondisi
}

// For loop
// let i = : kondisi awal perulangan
// i < 5 : stop condition
// i++ : increment
for (let i = 0; i < 5; i++) {
    console.log("for loop ke-", i);
}

// For loop lebih simpel
let array = [1,2,3,4,5]
for(let i of array) {
    console.log("loop ke-", i);
}
for (let i = 0; i < array.length; i++) {
    console.log("for loop ke-", i);
}

let hitung = 0;
let i = 0;
// Contoh lain while
while(i < array.length) {
    if(array[i] > 3) {
        hitung++;
    }
    i++;
}
console.log(`jumlah elemen yang lebih besar dari 3 : ${hitung}`);

// Contoh while untuk nyari bilangan prima
let n = 20; // caari bilangan prima dari 1 - 20
let prima = 2; // nilai terkecil bilangan prima

while (prima <= n) {
    let isPrime = true;
    let j = 2;

    while (j < prima) {
        // Selama nilai j kurang dari prima, eksekusi blok dibawah ini
        if (prima % j === 0) {
            // Jika prima dapat dibagi j, maka prima bukan bilangan prima
            isPrime = false; // Ubah nilai isPrime menjadi false
            break; // Kelauar atau hentikan while loop
        }
        j++;
    }

    if (isPrime) {
        // Jika isPrime true, maka prima adalah bilangan prima
        console.log(prima);
    }
    prima++;
}

// For each : perulangan khusus data array, foreach sendiri merupakan method bawaan dari array (array method)
array.forEach((i) => {
    console.log("foreach :", i);
});
