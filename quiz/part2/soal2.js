// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas
let examplesecondword = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
console.log(`second word: ` + examplesecondword);

let examplethirdword = word[15] + word[16];
console.log(`third word: ` + examplethirdword);

let examplefourthword = word[18] + word[19];
console.log(`fourth word: ` + examplefourthword);

let examplefifthword = word[21] + word[22] + word[23] + word[24];
console.log(`fifth word: ` + examplefifthword);