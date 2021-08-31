// 1. Object Literal

let mahasiswa = {
    nama : 'Resky',
    energy : 10,
    makan : function(porsi){
        this.energy = this.energy + porsi;
        console.log(`hallo ${this.nama}, total energimu ${this.energy}`)
    } // method adalah sebuah function yang ada di dalam object
}






// 2. Function Declaration

function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi){
        console.log(`halo ${this.nama}, energimu ${this.energi}`);
    }
    mahasiswa.main = function(jam){
        this.energi -=jam;
        console.log(`sisa energimu ${this.energi}`);
    }
    return mahasiswa;
}

let bayu = Mahasiswa('bayu',20);









// 3. Contractor Function
// keyword new

function Mahasiswa1(nama, energi){
    
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);

    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }

}

let mahasiswa1 = new Mahasiswa1('bayu',20);