// function expression
// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('bayu'));

// const tampilNama = (nama) => {
//     return `halo ${nama}`;
// }
// console.log(tampilNama('bayu'));

//================================
// IMPLISIT RETURN
//================================
// const tampilNama = nama => `halo ${nama}`;
// console.log(tampilNama('resky bayu andika'));


//===============================
// TANPA PARAMETER
//==============================
// const tampilNama = () => `hello world`;
// console.log(tampilNama());



let mahasiswa = ["resky", 'bayu','andhika'];

// const jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

//=============================================
// ====== menggunakan arrow function ==========
//=============================================
// const jumlahHuruf = mahasiswa.map(nama => {
//     return nama.length;
// })
// console.log(jumlahHuruf);

//=============================================
// untuk mengembalikan dalam bentukk objek
//=============================================
const jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf:nama.length }));
console.log(jumlahHuruf);
