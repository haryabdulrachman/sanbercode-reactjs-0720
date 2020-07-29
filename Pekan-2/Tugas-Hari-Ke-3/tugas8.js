// ===> SOAL 1 <====
// Buatlah fungsi menggunakan arrow function luas lingkaran dan keliling lingkaran dengan arrow function lalu gunakan let dan const di dalam soal ini

// let d = 10; // d = diameter
// let r = d / 2; // r == radius

// const luasLingkaran = () => {
//   return Math.round(3.14 / 2 * r * r);
// }
// const kelilingLingkaran = () => {
//   return Math.round(3.14 / 2 * d);
// }

// console.log(`Luas Lingkaran yaitu ${luasLingkaran()}, dan Keliling Lingkaran yaitu ${kelilingLingkaran()}`)


// ===> SOAL 2 <====

// let kalimat = ""

// const menambahkanKata = kataBaru => {
//   kalimat += kataBaru
// }

// menambahkanKata(`saya adalah seorang frontend developer`)
// console.log(kalimat);


// ===> SOAL 3 <====

class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
}

class Komik extends Book {
  constructor(name, totalPage, price, isColorful = false) {
    super(name, totalPage, price)
    this.isColorful = isColorful;
  }
}

const Fisika = new Book('Fisika', 200, 1000);
const Shincan = new Komik('Shincan', 2, 20000, true)

console.log(Fisika);
console.log('')
console.log(Shincan);




