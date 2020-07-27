// ===> SOAL 1 <===
// Ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objDaftarPeserta = {
  nama: 'Asep',
  jenisKelamin: 'Laki-laki',
  hobi: 'Baca buku',
  tahunLahir: 1992
}

console.log(objDaftarPeserta.nama);


// ===> SOAL 2 <===
// Uraikan data tersebut menjadi array of object dan munculkan data pertama

// var buah = [
//   { nama: 'strawberry', warna: 'merah', adaBijinya: 'tidak', harga: 9000 },
//   { nama: 'jeruk', warna: 'oranye', adaBijinya: 'ada', harga: 8000 },
//   { nama: 'Semangka', warna: 'Hijau & Merah', adaBijinya: 'ada', harga: 10000 },
//   { nama: 'Pisang', warna: 'Kuning', adaBijinya: 'tidak', harga: 5000 }
// ]

// console.log(buah[0]);


// ===> SOAL 3 <===
// Buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun

// var dataFilm = []
// function dataFilmKu(nama, durasi, genre, tahun) {
//   var tambahData = {
//     nama: nama,
//     durasi: durasi,
//     genre: genre,
//     tahun: tahun
//   }
//   dataFilm.push(tambahData);
// }

// dataFilmKu('Wiro Sableng', '2 Jam', 'Action', 1998);
// dataFilmKu('3 Idiots', '3 Jam', 'Comedy', 2006)
// console.log(dataFilm[0]);


// ===> SOAL 4 <===

// class Animal {
//   constructor(name, legs = 4, cold_blooded = false) {
//     this.name = name
//     this.legs = legs
//     this.cold_blooded = cold_blooded
//   }
//   get GetAnimal() {
//     return this.name;
//   }
//   set GetAnimal(x) {
//     this.name = x;
//   }
// }

// var sheep = new Animal("shaun");

// console.log(sheep.name) // "shaun"
// console.log(sheep.legs) // 4
// console.log(sheep.cold_blooded) // false


// Code class Ape dan class Frog di sini
// class Frog extends Animal {
//   constructor(props) {
//     super(props)
//     this.frog = props;
//   }
//   jump() {
//     return "Hop Hop"
//   }
// }

// class Ape extends Animal {
//   constructor(props) {
//     super(props)
//     this.ape = props;
//   }
//   yell() {
//     return "Auoooo"
//   }
// }

// var kodok = new Frog("buduk")
// kodok.jump() // "hop hop" 
// console.log(kodok.jump());

// var sungokong = new Ape("kera sakti")
// sungokong.yell() // "Auooo"
// console.log(sungokong.yell());


// ===> SOAL 5 <===

// class Clock {
//   constructor({ template }) {

//     var timer;

//     function render() {
//       var date = new Date();

//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function () {
//       clearInterval(timer);
//     };

//     this.start = function () {
//       render();
//       timer = setInterval(render, 1000);
//     };
//   }
// }

// var clock = new Clock({ template: 'h:m:s' });
// clock.start(); 