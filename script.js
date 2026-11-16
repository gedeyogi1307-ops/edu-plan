const dataJurusan = {
    kedokteran: {
        nama: "Kedokteran / Pendidikan Dokter",
        wajib: ["Biologi", "Kimia"],
        saran: ["Matematika Tingkat Lanjut", "Fisika", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Pastikan nilai Biologi dan Kimia selalu di atas 88 dan mengalami kenaikan tiap semester."
    },
    informatika: {
        nama: "Teknik Informatika / Ilmu Komputer",
        wajib: ["Matematika Tingkat Lanjut"],
        saran: ["Fisika", "Informatika", "Bahasa Inggris Tingkat Lanjut"],
        tips: "Kombinasi Matematika Tingkat Lanjut dan Informatika sangat memperkuat portofolio akademik."
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
    sipil: {
        nama: "Teknik Sipil / Arsitektur",
        wajib: ["Fisika", "Matematika Tingkat Lanjut"],
        saran: ["Kimia", "Seni Rupa (khusus Arsitektur)", "Informatika"],
        tips: "Untuk Arsitektur, siapkan juga portofolio gambar bentuk dan desain bangunan."
    }
};

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
                ${data.wajib.map(m => `<li>${m}</li>`).join('')}
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
    return [
        parseFloat(document.getElementById('sem1').value) || 0,
        parseFloat(document.getElementById('sem2').value) || 0,
        parseFloat(document.getElementById('sem3').value) || 0,
        parseFloat(document.getElementById('sem4').value) || 0,
        parseFloat(document.getElementById('sem5').value) || 0
    ];
}

function gambarGrafikSVG(nilai) {
    const wadah = document.getElementById('wadahGrafik');
    if (!wadah) return;

    const lebar = 440;
    const tinggi = 260;
    const padKiri = 45;
    const padKanan = 25;
    const padAtas = 30;
    const padBawah = 40;

    const areaLebar = lebar - padKiri - padKanan;
    const areaTinggi = tinggi - padAtas - padBawah;

    const minNilai = Math.min(...nilai, 70);
    const batasBawah = Math.max(0, Math.floor((minNilai - 5) / 5) * 5);
    const batasAtas = 100;
    const rentang = batasAtas - batasBawah || 1;

    const titik = nilai.map((val, idx) => {
        const nilaiAman = Math.min(100, Math.max(0, val));
        const x = padKiri + (idx * (areaLebar / (nilai.length - 1)));
        const y = padAtas + areaTinggi - (((nilaiAman - batasBawah) / rentang) * areaTinggi);
        return { x, y, val: nilaiAman };
    });

    const jalurGaris = titik.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x.toFixed(1)} ${t.y.toFixed(1)}`).join(' ');
    const jalurArea = `${jalurGaris} L ${titik[titik.length - 1].x.toFixed(1)} ${padAtas + areaTinggi} L ${titik[0].x.toFixed(1)} ${padAtas + areaTinggi} Z`;

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
    const elemenTitik = titik.map((t, i) => `
        <text x="${t.x}" y="${tinggi - 12}" text-anchor="middle" font-size="11" font-weight="800" fill="#18181b">${labelSemester[i]}</text>
        <circle cx="${t.x}" cy="${t.y}" r="6" fill="#2563eb" stroke="#18181b" stroke-width="2.5" />
        <rect x="${t.x - 18}" y="${t.y - 26}" width="36" height="18" rx="4" fill="#18181b" />
        <text x="${t.x}" y="${t.y - 14}" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">${t.val}</text>
    `).join('');

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
    const rataRata = (nilai.reduce((a, b) => a + b, 0) / nilai.length).toFixed(2);
    const statusEl = document.getElementById('statusTren');
    if (!statusEl) return;

    let jumlahTurun = 0;
    for (let i = 1; i < nilai.length; i++) {
        if (nilai[i] < nilai[i - 1]) {
            jumlahTurun++;
        }
    }

    if (jumlahTurun === 0 && nilai[4] > nilai[0]) {
        statusEl.className = "status-banner status-good";
        statusEl.innerHTML = `<strong>Tren Sangat Bagus:</strong> Rata-rata keseluruhan <strong>${rataRata}</strong>. Grafik nilaimu konsisten naik dari semester 1 hingga 5, sangat ideal untuk penilaian SNBP.`;
    } else if (nilai[4] >= nilai[0] && jumlahTurun <= 1) {
        statusEl.className = "status-banner status-good";
        statusEl.innerHTML = `<strong>Tren Cukup Stabil:</strong> Rata-rata keseluruhan <strong>${rataRata}</strong>. Sempat ada sedikit penurunan, tetapi grafik akhirmu berhasil pulih dan meningkat.`;
    } else {
        statusEl.className = "status-banner status-warn";
        statusEl.innerHTML = `<strong>Perhatian:</strong> Rata-rata keseluruhan <strong>${rataRata}</strong>. Terdeteksi penurunan tren nilai pada beberapa semester. Fokus tingkatkan nilai mata pelajaran pendukung di semester berikutnya.`;
    }
}

function updateGrafik() {
    const nilai = ambilNilaiInput();
    gambarGrafikSVG(nilai);
    tampilkanStatusAnalisis(nilai);
}

document.addEventListener('DOMContentLoaded', updateGrafik);
