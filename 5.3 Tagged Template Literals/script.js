//===========================
// Tagged Templates
//===========================
// const nama = 'Resky Bayu Andhika';
// const umur = 26;

// function coba(strings, ...values) { // values disini untuk menampung variabel nama dan umur dalam bentuk array
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //    result += `${str}${values[i] || ''}`;
//     // })
//     // return result; 
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'');
// }

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur}`;

// console.log(str);



//===========================
// Hightlight
//===========================
const nama = 'Resky Bayu Andhika';
const umur = 26;
const email = 'reskybayu234@gmail.com';

function highlight(strings, ...values) { // values disini untuk menampung variabel nama dan umur dalam bentuk array
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun, dan email saya adalah : ${email}.`;
document.body.innerHTML = str;

console.log(str);