console.log("=== first bang ===");

function printLog() {
    // Ini fungsi yang harusnya dijalankan kedua
    console.log("=== kedua ===");
}
setTimeout(printLog, 3000); // Tapi fungsi ini sengaja di tunda eksekusinya selama 3 detik

console.log("=== ketiga ===") // Ini eksekusi ketiga

setTimeout(myFunction, 3000) // Nunda eksekusi fungsi selama 3 detik

function myFunction() {
    console.log("I Love You !!");
}