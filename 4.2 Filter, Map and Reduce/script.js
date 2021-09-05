// contoh Higher Order Function
// 1. Array.prototype.map()
// 2. Array.prototype.filter()
// 3. Array.prototype.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// mencari angka >= 3
//=========================
// looping menggunakan for
//=========================
// const temp = [];
// for(let i = 0; i <= angka.length; i++){
//     if(angka[i] >= 3){
//         temp.push(angka[i]); // untuk memasukkan array baru ke dalam sebuah variabel array
//         // console.log(temp);
//     }
// }


//-========================
// menggunakan filter
//=========================
const newAngka = angka.filter((a) => a >= 3);
console.log(newAngka);


//=========================
// menggunakan map
//=========================
const mapAngka = angka.map(a => a * 2);
console.log(mapAngka);


//========================
// menggunakan reduce
//========================
//jumlahkan seluruh elemen pada array
// reduce memerlukan 2 argumen (bebas)
// argumen pertama (accumulator) adalah hasil dari prosesnya
// argumen kedua (currentValue) adalah elemen array yang sedang dilooping
const reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reduceAngka);


//=============================
// method chain
//=============================
const newNewAngka = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc,curtV) => acc + curtV);

console.log(newNewAngka);
