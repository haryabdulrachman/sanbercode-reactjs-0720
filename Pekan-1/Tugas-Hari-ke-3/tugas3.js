// =====> SOAL 1 <=====
// Gabungkan variabel tersebut menjadi "saya Senang belajar JAVASCRIPT"

var kataPertama = "saya";
var kataKedua = "senang";
var kataKeduaEdit = (kataKedua.charAt(0)).toUpperCase() + kataKedua.substr(1);
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kataKeempatEdit = kataKeempat.toUpperCase();
var output = kataPertama + ' ' + kataKeduaEdit + ' ' + kataKetiga + ' ' + kataKeempatEdit;
console.log(output);


// =====> SOAL 2 <=====
// Ubahlah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output

// var kataPertama = "1";
// var kataKedua = "2";
// var kataKetiga = "4";
// var kataKeempat = "5";

// var intPertama = parseInt(kataPertama)
// var intKedua = parseInt(kataKedua)
// var intKetiga = parseInt(kataKetiga)
// var intKeempat = parseInt(kataKeempat)

// var output = intPertama + intKedua + intKetiga + intKeempat;
// console.log(output);


// =====> SOAL 3 <=====
// Selesaikan variabel yang belum diisi

// var kalimat = 'wah javascript itu keren sekali';

// var kataPertama = kalimat.substring(0, 3);
// var kataKedua = kalimat.substring(4, 14);
// var kataKetiga = kalimat.substring(15, 18);
// var kataKeempat = kalimat.substring(19, 24);
// var kataKelima = kalimat.substring(25, 31);

// console.log('Kata Pertama: ' + kataPertama);
// console.log('Kata Kedua: ' + kataKedua);
// console.log('Kata Ketiga: ' + kataKetiga);
// console.log('Kata Keempat: ' + kataKeempat);
// console.log('Kata Kelima: ' + kataKelima);



// =====> SOAL 4 <=====
// Pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut.

// var nilai = 53;

// if (nilai >= 80 && nilai < 100) {
//   console.log('A');
// } else if (nilai >= 70 && nilai < 80) {
//   console.log('B');
// } else if (nilai >= 60 && nilai < 70) {
//   console.log('C');
// } else if (nilai >= 50 && nilai < 60) {
//   console.log('D');
// } else if (nilai >= 0 && nilai < 50) {
//   console.log('E');
// } else {
//   console.log('Angka yang anda masukan SALAH!');
// }



// =====> SOAL 5 <=====
// Ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)

// var tanggal = 18;
// var bulan = 6;
// var tahun = 1997;

// switch (bulan) {
//   case 1: { bulan = 'Januari'; break; }
//   case 2: { bulan = 'Februari'; break; }
//   case 3: { bulan = 'Maret'; break; }
//   case 4: { bulan = 'April'; break; }
//   case 5: { bulan = 'Mei'; break; }
//   case 6: { bulan = 'Juni'; break; }
//   case 7: { bulan = 'Juli'; break; }
//   case 8: { bulan = 'Agustus'; break; }
//   case 9: { bulan = 'September'; break; }
//   case 10: { bulan = 'Oktober'; break; }
//   case 11: { bulan = 'November'; break; }
//   case 12: { bulan = 'Desember'; break; }
//   default: { bulan = '(Angka Bulan yang anda masukan SALAH!)' }
// }

// var output = tanggal.toString() + " " + bulan + " " + tahun;
// console.log(output);


