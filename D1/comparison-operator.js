// Equal(Sama dengan)
let equal = 100;
console.log("=== Equal Operator ===");
console.log(equal == 100); // True
console.log(equal == 90); // False

// Not Equal(Tidak sama dengan) !=
let sifat = "rajin";
console.log("=== Nor Equal ===");
console.log(sifat != "malas"); // True
console.log(sifat != "bandel"); // True

// Strict equal(Persamaan ketat yang juga mengecek tipe data nilainya)
let strictEqual = 10;
console.log("=== strict equal operator ===");
console.log(strictEqual == "10"); // True
console.log(strictEqual === "10"); // False
console.log(strictEqual === 10 ); // True

// Strict not equal
let strictNotEqual = 10;
console.log("=== strict not equal operator ===");
console.log(strictNotEqual != "10"); // False
console.log(strictNotEqual !== "10"); // True
console.log(strictNotEqual !== 10 ); // False

// Kurang / lebih dari
let angka = 17;
console.log("=== kurang/lebih dari operator");
console.log(angka < 20); // True
console.log(angka > 17); // False
console.log(angka >= 17); // True
console.log(angka <= 17); // True

// Operator kondisional OR || (Menghasilkan nilai true jika ada salah satu operasi true)
console.log("=== OR ===");
console.log(true || true); // True
console.log(false || true); // True
console.log(true || false); // True
console.log(false || false); // False
console.log(false || false || false || true); // True

// Operator kondisional AND && (Menghasilkan nilai false jika ada salah satu operasi false)
console.log("=== AND ===");
console.log(true && true); // True
console.log(false && true); // False
console.log(true && false); // False
console.log(false || false); // False
console.log(false || false || false || true); // False

let firstName = null;
let lastName = "wati";
let age = 20;
let noJob = true
let fullName = age == 20 && noJob;
console.log(fullName);

let user = {
    name: "danu",
    age: 25,
    address: {
        city: "Tangsel",
        country: "Indonesia",
    },
};

let country = user && user.address && user.address.country;
console.log("country : ", country);

// Fungsi untuk mencari negara user
function findUserCountry(user){
    let country = user && user.address && user.address.country;
    return country || "Data tidak ditemukan";
}
console.log(findUserCountry(user));
