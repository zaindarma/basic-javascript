const { match } = require("assert");
const fs = require("fs")

const carProducts = [{
        id: 1,
        name: "ESEMKA SUV 4x4 Hybrid",
        price: null,
        tag: ["Produk Terlaris"],
        variant: [{
                color: "black",
                transmission: "automatic",
                type: "hybrid",
                fuelType: "pertalite",
            },
            {
                color: "silver",
                transmission: "manual",
                type: "hybrid",
                fuelType: "pertalite",
            },
        ],
        isPreorder: true,
    },
    {
        id: 2,
        name: "BAGATATA Hyper Car V12",
        price: 370000000000,
        tag: ["Produk Terlaris", "Promo"],
        variant: [{
                color: "black",
                transmission: "automatic",
                type: "engine",
                fuelType: "premium",
            },
            {
                color: "white",
                transmission: "manual",
                type: "engine",
                fuelType: "premium",
            },
        ],
        isPreorder: false,
    },
    {
        id: 3,
        name: "FIRIRIRI F8 Hyper Car Limited Edition",
        price: 4400000000,
        tag: ["Produk Terbaru", "Promo"],
        variant: [{
                color: "red",
                transmission: "automatic",
                type: "engine",
                fuelType: "pertalite",
            },
            {
                color: "white",
                transmission: "manual",
                type: "engine",
                fuelType: "pertalite",
            },
        ],
        isPreorder: false,
    },
    {
        id: 4,
        name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
        price: 7000000000,
        tag: ["Produk Terbaru"],
        variant: [{
                color: "black",
                transmission: "automatic",
                type: "hybrid",
                fuelType: "pertamax turbo",
            },
            {
                color: "blue",
                transmission: "automatic",
                type: "hybrid",
                fuelType: "pertamax turbo",
            },
            {
                color: "green",
                transmission: "automatic",
                type: "hybrid",
                fuelType: "pertamax turbo",
            },
            {
                color: "red",
                transmission: "automatic",
                type: "hybrid",
                fuelType: "pertamax turbo",
            },
        ],
        isPreorder: false,
    },
    {
        id: 5,
        name: "TOYOTA Land Cruiser Prado 4x4",
        price: 250000000,
        tag: ["Produk Terlaris"],
        variant: [{
                color: "matte black",
                transmission: "automatic",
                type: "engine",
                fuelType: "solar",
            },
            {
                color: "army",
                transmission: "automatic",
                type: "engine",
                fuelType: "solar",
            },
            {
                color: "white",
                transmission: "automatic",
                type: "engine",
                fuelType: "solar",
            },
        ],
        isPreorder: false,
    },
    {
        id: 6,
        name: "Wuling YangWang U9 EV",
        price: null,
        tag: ["Produk Terbaru"],
        variant: [{
                color: "matte black",
                transmission: "automatic",
                type: "electric",
                fuelType: "battery",
            },
            {
                color: "navy",
                transmission: "automatic",
                type: "electric",
                fuelType: "battery",
            },
            {
                color: "white",
                transmission: "automatic",
                type: "electric",
                fuelType: "battery",
            },
        ],
        isPreorder: true,
    },
    {
        id: 7,
        name: "Beat Esp 110 Second",
        price: 7500000,
        tag: ["Produk Terlaris", "Bekas"],
        variant: [{
                color: "black",
                transmission: "automatic",
                type: "engine",
                fuelType: "pertamax turbo",
            },
            {
                color: "navy",
                transmission: "automatic",
                type: "engine",
                fuelType: "pertamax turbo",
            },
            {
                color: "white",
                transmission: "automatic",
                type: "engine",
                fuelType: "pertamax turbo",
            },
            {
                color: "red",
                transmission: "automatic",
                type: "engine",
                fuelType: "pertamax turbo",
            },
        ],
        isPreorder: false,
    },
];


// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * math/reduce
 */
console.log("========================= No.1");

const hargaTertinggi = carProducts.reduce((prev, next) => {
    let maxPrice = Math.max(prev.price, next.price)
    return maxPrice === prev.price ? prev : next;
})

const hargaTerendah = carProducts.reduce((prev, next) => {
    let minPrice = Math.min(prev.price, next.price)
    return minPrice === prev.price ? prev : next;
})

console.log("Harga Tertinggi : ", hargaTertinggi);
console.log("Harga Terendah : ", hargaTerendah);

/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
 */
console.log("========================= No.2");

const mobilPromo = carProducts
    .filter((mobil) =>
        mobil.tag.some((promo) => promo === "Promo"))

console.log("Promo Mobil : ", mobilPromo);

/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */
console.log("========================= No.3");

const filterHarga = carProducts
    .filter((mobil) => mobil.price !== null)
    .sort((tertinggi, terendah) => terendah.price - tertinggi.price)

console.log("Urutan harga mobil tertinggi ke terendah : ", filterHarga);


/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */
console.log("========================= No.4");

const engine = carProducts
    .filter((eng) => eng.variant.some((item) => item.type === "engine"));

const hybrid = carProducts
    .filter((hyb) => hyb.variant.some((item) => item.type === "hybrid"))

const electric = carProducts
    .filter((ele) => ele.variant.some((item) => item.type === "electric"))


console.log("Mobil Engine : ", engine);
console.log("Mobil Hybrid : ", hybrid);
console.log("Mobil Electric : ", electric);

/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */
console.log("========================= No.5");

function readFile() {
    try {
        const data = fs.readFileSync("./carProducts.json", "utf-8");
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const fileData = JSON.parse(readFile());

const dataUrut = fileData.sort((a, b) => {
    if (a.price === null) return 1;
    if (b.price === null) return -1;
    return b.price - a.price
})

function createFile() {
    try {
        fs.writeFileSync("./carProducts.json", JSON.stringify(dataUrut, null, 2), "utf-8");
        console.log("data berhasil disimpan");
    } catch (error) {
        console.log(error);
    }
}
createFile();


/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 */
console.log("========================= No.6");

const tambahDataMobil = {
    id: 8,
    name: "Mio Brebet Second",
    price: 6500000,
    tag: ["Produk Galaku", "Bekas"],
    variant: [{
            color: "black",
            transmission: "automatic",
            type: "engine",
            fuelType: "pertamax turbo",
        },
        {
            color: "white",
            transmission: "automatic",
            type: "engine",
            fuelType: "pertamax turbo",
        },
    ],
    isPreorder: true,
}

const tambahData = JSON.stringify([...carProducts, tambahDataMobil], null, 2)

function tambahDataBaru() {
    fs.writeFile("./addNewCarProducts.json", tambahData, "utf-8", (error) => {
        if (error) {
            console.log(error);
            return error
        }
    })
    console.log("Data berhasil ditambahkan");
}

tambahDataBaru()

/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */
console.log("========================= No.7");

async function bedaHarga() {
    try {
        const hargaTertinggi = fileData.reduce((prev, next) => {
            if (next.price === null) return prev;
            return next.price > prev.price ? next : prev;
        });
        console.log("Harga tertinggi : ", hargaTertinggi);

        const hargaTerendah = fileData.reduce((prev, next) => {
            if (next.price === null) return prev;
            return next.price < prev.price ? next : prev;
        });
        console.log("Harga terendah : ", hargaTerendah);

        const selisihHarga = hargaTertinggi.price - hargaTerendah.price
        console.log("Selisih harga adalah : ", selisihHarga);
    } catch (error) {
        console.log(error);
    }
}

bedaHarga()

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */
console.log("========================= No.8");

function varianTerbanyak() {
    const warnaTerbanyak = Math.max(...carProducts.map((item) => item.variant.length))

    const varianWarnaTerbanyak = carProducts.filter((item) => item.variant.length === 4)
    console.log("Data mobil dengan varian warna terbanyak adalah : ", varianWarnaTerbanyak);
}

varianTerbanyak()

/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
 */
console.log("========================= No.9");

function tidakPreorder() {
    const tidakPreorder = carProducts.filter((item) => {
        return item.isPreorder === false
    });
    console.log("Mobil yang tidak preorder : ", tidakPreorder);
};

tidakPreorder();

/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */
console.log("========================= No.10");
const segitiga = (n) => {
    for (let i = 1; i <= n; i++) {
        let j = "";
        for (let k = 1; k <= (2 * n - 1); k++) {
            k >= (n + 1 - i) && k <= (n - 1 + i) ? j += "." : j += " ";
        }
        console.log(j);
    }
};
segitiga(10);

/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */
console.log("========================= No.11");

const employee = [{
        id: 1,
        nama: "Danu",
        age: 25,
        jobDesk: [{ title: "frontend", salary: 12000000 }],
        hobby: ["Membaca", "Menulis"]
    },
    {
        id: 2,
        nama: "Dani",
        age: 26,
        jobDesk: [{ title: "frontend", salary: 2000000 }],
        hobby: ["Membaca", "Menulis"]
    },
    {
        id: 3,
        nama: "Dina",
        age: 27,
        jobDesk: [{ title: "frontend", salary: 3000000 }],
        hobby: ["Membaca"]
    },
    {
        id: 4,
        nama: "Deni",
        age: 26,
        jobDesk: [{ title: "backend", salary: 4000000 }],
        hobby: ["Membaca"]
    },
    {
        id: 5,
        nama: "Dian",
        age: 27,
        jobDesk: [{ title: "frontend", salary: 8000000 }],
        hobby: ["Membaca"]
    },
];

// CREATE
// CREATE DATA BARU
console.log("CREATE");
let createKaryawan = employee
createKaryawan.push({
    id: 6,
    nama: "Jokowi",
    age: 40,
    jobDesk: [{ title: "presiden", salary: 9000000 }],
    hobby: ["Mengkaget"]
});
console.table(createKaryawan);

// READ
// BACA DATA
console.log("READ");
console.table(employee)

// UPDATE
// NGUBAH DATA NAMA INDEX 4
console.log("UPDATE");
employee[3].age = 44
console.table(employee);

// DELETE
console.log("DELETE");
employee.splice(4, 1);
console.table(employee);