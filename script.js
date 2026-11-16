const dataJurusan = {
    kedokteran: {
        nama: "Kedokteran / Pendidikan Dokter",
        wajib: ["Biologi", "Kimia"],
        saran: ["Matematika Tingkat Lanjut", "Fisika", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Pastikan nilai Biologi dan Kimia selalu di atas 88 dan mengalami kenaikan tiap semester."
    },
    farmasi: {
        nama: "Farmasi",
        wajib: ["Biologi", "Kimia"],
        saran: ["Matematika Tingkat Lanjut", "Fisika", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Kimia adalah fondasi utama di Farmasi. Perkuat pemahaman kimia organik dan perhitungan dosis."
    },
    informatika: {
        nama: "Teknik Informatika / Ilmu Komputer",
        wajib: ["Matematika Tingkat Lanjut"],
        saran: ["Fisika", "Informatika", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Kombinasi Matematika Tingkat Lanjut dan Informatika sangat memperkuat portofolio akademik."
    },
    industri: {
        nama: "Teknik Industri",
        wajib: ["Matematika Tingkat Lanjut", "Fisika"],
        saran: ["Ekonomi", "Kimia", "Informatika"],
        tips: "Teknik Industri memadukan rekayasa dan manajemen, sehingga mengambil Ekonomi sebagai pelengkap sangat disarankan."
    },
    sipil: {
        nama: "Teknik Sipil / Arsitektur",
        wajib: ["Fisika", "Matematika Tingkat Lanjut"],
        saran: ["Kimia", "Seni Rupa (khusus Arsitektur)", "Informatika"],
        tips: "Untuk Arsitektur, siapkan juga portofolio gambar bentuk dan desain bangunan."
    },
    manajemen: {
        nama: "Manajemen / Bisnis / Akuntansi",
        wajib: ["Ekonomi", "Matematika Tingkat Lanjut"],
        saran: ["Sosiologi", "Bahasa Inggris Tingkat Lanjut", "Informatika"],
        tips: "Ekonomi menjadi komponen penilaian utama. Perkuat juga kemampuan analisis data dasar."
    },
    hukum: {
        nama: "Ilmu Hukum",
        wajib: ["Sosiologi", "Pendidikan Pancasila (Mapel Wajib)"],
        saran: ["Antropologi", "Sejarah Tingkat Lanjut", "Bahasa Indonesia Tingkat Lanjut"],
        tips: "Sosiologi dan pemahaman regulasi sosial sangat krusial untuk jurusan Hukum."
    },
    psikologi: {
        nama: "Psikologi",
        wajib: ["Sosiologi", "Biologi"],
        saran: ["Matematika Tingkat Lanjut", "Antropologi", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Beberapa kampus memasukkan Psikologi ke rumpun Saintek (Biologi) dan sebagian Soshum (Sosiologi). Mengambil keduanya sangat aman."
    },
    komunikasi: {
        nama: "Ilmu Komunikasi",
        wajib: ["Sosiologi"],
        saran: ["Antropologi", "Bahasa Inggris Tingkat Lanjut", "Bahasa Indonesia Tingkat Lanjut", "Ekonomi"],
        tips: "Aktif di kegiatan jurnalistik sekolah, OSIS, atau lomba debat dapat menambah nilai portofolio."
    },
    hi: {
        nama: "Hubungan Internasional",
        wajib: ["Sosiologi", "Bahasa Inggris Tingkat Lanjut"],
        saran: ["Sejarah Tingkat Lanjut", "Geografi", "Ekonomi", "Bahasa Asing Lainnya"],
        tips: "Kemampuan bahasa asing dan wawasan geopolitik global menjadi nilai tambah utama."
    },
    dkv: {
        nama: "Desain Komunikasi Visual (DKV)",
        wajib: ["Seni Budaya / Seni Rupa"],
        saran: ["Informatika", "Sosiologi", "Bahasa Inggris Tingkat Lanjut", "Antropologi"],
        tips: "Wajib menyiapkan portofolio karya seni dan desain sesuai ketentuan panitia SNBP."
    },
    pgsd: {
        nama: "Pendidikan Guru Sekolah Dasar (PGSD)",
        wajib: ["Sosiologi", "Pendidikan Pancasila (Mapel Wajib)"],
        saran: ["Biologi", "Matematika Tingkat Lanjut", "Bahasa Indonesia Tingkat Lanjut"],
        tips: "Guru SD mengajar lintas bidang, sehingga kestabilan nilai di semua mata pelajaran umum sangat diperhatikan."
    }
};

function filterJurusan() {
    const kataKunci = document.getElementById("cariJurusan").value.toLowerCase();
    const semuaKotak = document.querySelectorAll("#daftarJurusanGrid .option-box");

    semuaKotak.forEach(function(kotak) {
        const namaJurusan = kotak.getAttribute("data-nama");
        if (namaJurusan.indexOf(kataKunci) !== -1) {
            kotak.style.display = "flex";
        } else {
            kotak.style.display = "none";
        }
    });
}

function cekMapel() {
    const terpilih = document.querySelector('input[name="jurusanRadio"]:checked');
    const container = document.getElementById("hasilMapel");

    if (!terpilih) {
        return;
    }

    const data = dataJurusan[terpilih.value];
    container.innerHTML = `
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-primary);">${data.nama}</h3>
        <div style="margin-top: 0.85rem;">
            <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #be123c;">Prioritas Utama (Mapel Pendukung SNBP):</span>
            <ul style="margin-left: 1.25rem; margin-top: 0.35rem; font-size: 0.9rem; font-weight: 700;">
                ${data.wajib.map(function(m) { return `<li>${m}</li>`; }).join('')}
            </ul>
        </div>
        <div style="margin-top: 0.85rem;">
            <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--ink-secondary);">Mapel Pelengkap yang Disarankan:</span>
            <p style="font-size: 0.88rem; font-weight: 600; margin-top: 0.25rem;">${data.saran.join(", ")}</p>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background-color: #ffffff; border: 2px solid var(--border-dark); border-radius: 6px; font-size: 0.82rem;">
            <strong>Strategi:</strong> ${data.tips}
        </div>
    `;
}

function ambilNilaiInput() {
    const ids = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5'];
    return ids.map(function(id) {
        const el = document.getElementById(id);
        let angka = parseFloat(el.value);
        if (isNaN(angka)) {
            angka = 0;
        }
        if (angka > 100) {
            angka = 100;
            el.value = 100;
        }
        if (angka < 0) {
            angka = 0;
            el.value = 0;
        }
        return angka;
    });
}

function gambarGrafikSVG(nilai) {
    const wadah = document.getElementById('wadahGrafik');
    if (!wadah) {
        return;
    }

    const lebar = 440;
    const tinggi = 260;
    const padKiri = 45;
    const padKanan = 25;
    const padAtas = 30;
    const padBawah = 40;

    const areaLebar = lebar - padKiri - padKanan;
    const areaTinggi = tinggi - padAtas - padBawah;

    const daftarMin = nilai.concat([70]);
    const minNilai = Math.min.apply(null, daftarMin);
    const batasBawah = Math.max(0, Math.floor((minNilai - 5) / 5) * 5);
    const batasAtas = 100;
    const rentang = (batasAtas - batasBawah) || 1;

    const titik = nilai.map(function(val, idx) {
        const x = padKiri + (idx * (areaLebar / (nilai.length - 1)));
        const y = padAtas + areaTinggi - (((val - batasBawah) / rentang) * areaTinggi);
        return { x: x, y: y, val: val };
    });

    const jalurGaris = titik.map(function(t, i) {
        return (i === 0 ? 'M ' : 'L ') + t.x.toFixed(1) + ' ' + t.y.toFixed(1);
    }).join(' ');

    const titikAkhir = titik[titik.length - 1];
    const titikAwal = titik[0];
    const jalurArea = jalurGaris + ' L ' + titikAkhir.x.toFixed(1) + ' ' + (padAtas + areaTinggi) + ' L ' + titikAwal.x.toFixed(1) + ' ' + (padAtas + areaTinggi) + ' Z';

    let gridHorizontal = '';
    const langkah = 4;
    for (let i = 0; i <= langkah; i++) {
        const nilaiLabel = Math.round(batasBawah + (rentang / langkah) * i);
        const yPos = padAtas + areaTinggi - ((areaTinggi / langkah) * i);
        gridHorizontal += `
            <line x1="${padKiri}" y1="${yPos}" x2="${lebar - padKanan}" y2="${yPos}" stroke="#d4d4d8" stroke-width="1.5" stroke-dasharray="4 4" />
            <text x="${padKiri - 8}" y="${yPos + 4}" text-anchor="end" font-size="11" font-weight="700" fill="#52525b">${nilaiLabel}</text>
        `;
    }

    const labelSemester = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'];
    const elemenTitik = titik.map(function(t, i) {
        return `
            <text x="${t.x}" y="${tinggi - 12}" text-anchor="middle" font-size="11" font-weight="800" fill="#18181b">${labelSemester[i]}</text>
            <circle cx="${t.x}" cy="${t.y}" r="6" fill="#2563eb" stroke="#18181b" stroke-width="2.5" />
            <rect x="${t.x - 18}" y="${t.y - 26}" width="36" height="18" rx="4" fill="#18181b" />
            <text x="${t.x}" y="${t.y - 14}" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">${t.val}</text>
        `;
    }).join('');

    wadah.innerHTML = `
        <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; color: var(--ink-primary);">
            Grafik Perkembangan Nilai Rapor
        </div>
        <svg viewBox="0 0 ${lebar} ${tinggi}" style="width: 100%; height: auto; background: #ffffff; border: 2px solid #18181b; border-radius: 8px; display: block;">
            ${gridHorizontal}
            <line x1="${padKiri}" y1="${padAtas}" x2="${padKiri}" y2="${padAtas + areaTinggi}" stroke="#18181b" stroke-width="2" />
            <line x1="${padKiri}" y1="${padAtas + areaTinggi}" x2="${lebar - padKanan}" y2="${padAtas + areaTinggi}" stroke="#18181b" stroke-width="2" />
            <path d="${jalurArea}" fill="rgba(37, 99, 235, 0.14)" />
            <path d="${jalurGaris}" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />
            ${elemenTitik}
        </svg>
    `;
}

function tampilkanStatusAnalisis(nilai) {
    const total = nilai.reduce(function(a, b) { return a + b; }, 0);
    const rataRata = (total / nilai.length).toFixed(2);
    const statusEl = document.getElementById('statusTren');
    if (!statusEl) {
        return;
    }

    let jumlahTurun = 0;
    for (let i = 1; i < nilai.length; i++) {
        if (nilai[i] < nilai[i - 1]) {
            jumlahTurun++;
        }
    }

