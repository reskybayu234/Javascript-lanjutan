// ambil semua elemen video
const elVideo = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang JAVSCRIPT LANJUTAN
let filElVideo = elVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
.map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    const parts = waktu.split(':')
                  .map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})


// jumlahkan semua detik
.reduce((accumulator, currentValue) => accumulator + currentValue);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(filElVideo/3600);
filElVideo = filElVideo - (jam*3600);
const menit = Math.floor(filElVideo/60);
const detik = filElVideo - menit*60;

// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = elVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pjmlVideo.textContent = `${jmlVideo} video`;