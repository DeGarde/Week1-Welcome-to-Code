// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';

let exampleFirstWord = word.substring(0, 3);
let firstWordLength = exampleFirstWord.length;
console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

let examplesecondword = word.substring(4, 14);
let secondWordLength = examplesecondword.length;
console.log('Second Word: ' + examplesecondword + ', with length: ' + secondWordLength);

let examplethirdword = word.substring(15, 17);
let thirdWordLength = examplethirdword.length;
console.log('Third Word: ' + examplethirdword + ', with length: ' + thirdWordLength);

let examplefourthword = word.substring(18, 20);
let fourthWordLength = examplefourthword.length;
console.log('Fourth Word: ' + examplefourthword + ', with length: ' + fourthWordLength);

let examplefifthword = word.substring(21, 25);
let fifthWordLength = examplefifthword.length;
console.log('Fifth Word: ' + examplefifthword + ', with length: ' + fifthWordLength);