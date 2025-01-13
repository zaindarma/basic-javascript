// SWITCH CASE : kondisi untuk menampilkan output berdasarkan nilai tertentu
let remoteButton = 1;

switch (remoteButton) {
    case 1:{
        console.log("Turn on");
        break;
    }
    case 2:{
        console.log("Turn off");
        break;
    }

    default: {
        console.log("input tidak valid");
        break;
    }
}

// IF statement: if()
let nilai = 100;
if (nilai == 100) {
    console.log("Selamat anda mendapatkan nilai sempurna");   
}

// If else statement : if(kondisi) { output } else { output }
if (nilai == 100) {
    console.log("Selamat anda lulus!");
} else {
    console.log("Anda tidak lulus");   
}

// If else if statement : if(kondisi) { output } else if (kondisi) { output } else {output}
let pendaftaran = "close";
let kuota = 10
if (pendaftaran == "open") {
    console.log("Pendaftaran Sukses!");
} else if( kuota <= 10 ) {
    console.log("Kuota masih tersedia");   
} else {
    console.log("Anda tidak bisa mendaftar");
}

// nested if(if bersarang) : if(kondisi) { if(kondisi) { output } } else { output }
let nilaiUAS = 92
if (nilaiUAS >= 70) { 
    if(nilaiUAS >= 90) {
        console.log("nilai A");
    } else {
        console.log("nilai B");
    }
} else {
    console.log("nilai C");
}

// Ternary operator : kondisi ? output true : output false
let hasil = nilaiUAS >= 70 ? "lulus" : "tidak lulus";
console.log(hasil);

let result = nilaiUAS >= 90 ? "nilai A" : nilaiUAS >= 80 ? "nilai B" : "nilai C";
console.log(result);
