// Template literal hanya bisa digunakan dengan `` backtick
// Multi-line String
// Embedded Expression
//HTML Fragments
const mhs = {
    nama : 'bayu',
    umur : 26,
    nim : 13306141026,
    email : 'bayu@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;

console.log(el);