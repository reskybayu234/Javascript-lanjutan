// 2.1 Execution context, Hoisting dan Scope

// function a (){
//     console.log('ini a');
//     function b (){
//         console.log('ini b');
//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


// LATIHAN

function satu(){
    var nama = "resky";
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama= 'bayu';
satu();
dua('andhika');
console.log(nama);

// yang pertama dilakukan adalah creating phase, hoisting  function satu, function dua dan var nama. setelah dihoisting, nama diisi undifine. Eksekusi mulai dari console.log yang berda di luar