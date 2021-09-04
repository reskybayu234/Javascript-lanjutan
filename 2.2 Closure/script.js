// function init(){
//     let nama = 'bayu';
//     function tamplilNama(){
//         console.log(nama);
//     }
//     tamplilNama();
// }
// init();



// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('bayu');
// selamatMalam('resky');
// selamatSiang('andhika');



let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());