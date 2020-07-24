// ===> SOAL 1 <===
// Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!”

function Halo() {
  return 'Halo Sanbers!'
}
console.log('===> Jawaban Soal Ke-1 <===')
console.log(Halo());


// ===> SOAL 2 <===
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.
// Jawabannya harus 48

function kalikan(num1, num2) {
  return num1 * num2;
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log('===> Jawaban Soal Ke-2 <===')
console.log(hasilKali)


// ===> SOAL 3 <===
// Tulislah sebuah function dengan nama introduce()
// Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby)
console.log('===> Jawaban Soal Ke-3 <===')
console.log(perkenalan)