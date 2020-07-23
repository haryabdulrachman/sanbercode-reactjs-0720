// =====> SOAL 1 <======
// 1. melakukan looping dalam JavaScript dengan menggunakan syntax while.
// 2. kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur.
// 3. tampilkan di console juga judul ‘LOOPING PERTAMA’ dan ‘LOOPING KEDUA’.

console.log('===> Jawaban Soal ke 1 <===')
var loopingPertama = 2;
while (loopingPertama <= 20) {
  console.log(loopingPertama + ' - I Love Coding');
  loopingPertama += 2;
}
var loopingKedua = 20;
while (loopingKedua >= 2) {
  console.log(loopingKedua + ' - I will become a frontend developer');
  loopingKedua -= 2;
}


// =====> SOAL 2 <======
// 1. Melakukan looping dalam JavaScript dengan menggunakan syntax for.
// 2. Syarat:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.

console.log('===> Jawaban Soal ke 2 <===')
for (var angka = 1; angka <= 20; angka++) {
  if (angka % 2 == 0) {
    console.log(angka + ' - Berkualitas');
  } else if (angka % 3 == 0) {
    console.log(angka + ' - I Love Coding');
  } else {
    console.log(angka + ' - Santai');
  }
}


// =====> SOAL 3 <======
// Kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi 7 dan alas 7. Looping boleh menggunakan syntax apa pun (while, for, do while).

console.log('===> Jawaban Soal ke 3 <===')
var tinggi = 7;
var pagar = [];
for (var alas = 1; alas <= tinggi; alas++) {
  var alasStr = alas.toString();
  alasStr = '#';
  pagar.push(alasStr);
  var pagarStr = pagar.join(' ')
  console.log(pagarStr);
}


// =====> SOAL 4 <======
// Ubahlah kalimat diatas menjadi array ["saya", "sangat", "senang", "belajar", "javascript"].

console.log('===> Jawaban Soal ke 4 <===')
var kalimat = "saya sangat senang belajar javascript";
var kalimatArr = kalimat.split(' ');
console.log(kalimatArr);


// =====> SOAL 5 <======
// Urutkan array di atas dan tampilkan data seperti output 
// 1. Mangga 
// 2. Apel 
// 3. Anggur 
// 4. Semangka 
// 5. Jeruk

console.log('===> Jawaban Soal ke 5 <===')
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuahSort = daftarBuah.sort()
for (var i = 0; i < daftarBuah.length; i++) {
  console.log(daftarBuahSort[i])
}