// HTML Fragments
// const mhs = {
//     nama : 'bayu',
//     umur : 26,
//     nim : '13306141026',
//     email : 'reskybayu@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;



// 2. Looping
// const mhs = [
//     {
//         nama : 'bayu',
//         email : 'bayu@email.com'
//     },
//     {
//         nama : 'resky',
//         email : 'resky@email.com'
//     },
//     {
//         nama : 'andhika',
//         email : 'andhika@email.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}
//     </ul>`).join('')}
// </div>`;




// 3.Conditionals
// ternary
// const lagu = {
//     judul : 'tetap dalam jiwa',
//     penyanyi : 'isyana sarasvati',
//     feat : 'rayi putra'
// }
// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
// </ul>
// </div>`;


// 4. Nested
// HTML Fragment bersarang
const mhs = {
    nama : 'bayu',
    semester : 5,
    mataKuliah : ['a','b','c','d']
}

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;