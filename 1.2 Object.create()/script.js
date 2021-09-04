// 1. OBject literal
// PROBLEM : tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
//     nama : 'resky bayu andhika',
//     energi : 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, sisa energi mu ${this.energi}`);
//     }
// }


// 2. function declaration

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, sisa energimu ${this.energi}`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, sisa energimu ${this.energi}`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let bayu = Mahasiswa('bayu',20); // instansiasi
let resky = Mahasiswa('resky',15); // instansiasi