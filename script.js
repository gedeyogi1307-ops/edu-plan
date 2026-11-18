const dataJurusan = {
    kedokteran: {
        nama: "Kedokteran / Pendidikan Dokter",
        wajib: "Biologi, Kimia",
        saran: "Matematika Tingkat Lanjut, Fisika, Bahasa Inggris Tingkat Lanjut",
        tips: "Pastikan nilai Biologi dan Kimia selalu di atas 88 dan mengalami kenaikan tiap semester."
    },
    farmasi: {
        nama: "Farmasi",
        wajib: "Biologi, Kimia",
        saran: "Matematika Tingkat Lanjut, Fisika, Bahasa Inggris Tingkat Lanjut",
        tips: "Kimia adalah fondasi utama di Farmasi. Perkuat pemahaman kimia organik dan perhitungan dosis."
    },
    informatika: {
        nama: "Teknik Informatika / Ilmu Komputer",
        wajib: "Matematika Tingkat Lanjut",
        saran: "Fisika, Informatika, Bahasa Inggris Tingkat Lanjut",
        tips: "Kombinasi Matematika Tingkat Lanjut dan Informatika sangat memperkuat portofolio akademik."
    },
    industri: {
        nama: "Teknik Industri",
        wajib: "Matematika Tingkat Lanjut, Fisika",
        saran: "Ekonomi, Kimia, Informatika",
        tips: "Teknik Industri memadukan rekayasa dan manajemen, sehingga mengambil Ekonomi sebagai pelengkap sangat disarankan."
    },
    sipil: {
        nama: "Teknik Sipil / Arsitektur",
        wajib: "Fisika, Matematika Tingkat Lanjut",
        saran: "Kimia, Seni Rupa (khusus Arsitektur), Informatika",
        tips: "Untuk Arsitektur, siapkan juga portofolio gambar bentuk dan desain bangunan."
    },
    manajemen: {
        nama: "Manajemen / Bisnis / Akuntansi",
        wajib: "Ekonomi, Matematika Tingkat Lanjut",
        saran: "Sosiologi, Bahasa Inggris Tingkat Lanjut, Informatika",
        tips: "Ekonomi menjadi komponen penilaian utama. Perkuat juga kemampuan analisis data dasar."
    },
    hukum: {
        nama: "Ilmu Hukum",
        wajib: "Sosiologi, Pendidikan Pancasila (Mapel Wajib)",
        saran: "Antropologi, Sejarah Tingkat Lanjut, Bahasa Indonesia Tingkat Lanjut",
        tips: "Sosiologi dan pemahaman regulasi sosial sangat krusial untuk jurusan Hukum."
    },
    psikologi: {
        nama: "Psikologi",
        wajib: "Sosiologi, Biologi",
        saran: "Matematika Tingkat Lanjut, Antropologi, Bahasa Inggris Tingkat Lanjut",
        tips: "Beberapa kampus memasukkan Psikologi ke rumpun Saintek (Biologi) dan sebagian Soshum (Sosiologi). Mengambil keduanya sangat aman."
    },
    komunikasi: {
        nama: "Ilmu Komunikasi",
        wajib: "Sosiologi",
        saran: "Antropologi, Bahasa Inggris Tingkat Lanjut, Bahasa Indonesia Tingkat Lanjut, Ekonomi",
        tips: "Aktif di kegiatan jurnalistik sekolah, OSIS, atau lomba debat dapat menambah nilai portofolio."
    },
    hi: {
        nama: "Hubungan Internasional",
        wajib: "Sosiologi, Bahasa Inggris Tingkat Lanjut",
        saran: "Sejarah Tingkat Lanjut, Geografi, Ekonomi, Bahasa Asing Lainnya",
        tips: "Kemampuan bahasa asing dan wawasan geopolitik global menjadi nilai tambah utama."
    },
    dkv: {
        nama: "Desain Komunikasi Visual (DKV)",
        wajib: "Seni Budaya / Seni Rupa",
        saran: "Informatika, Sosiologi, Bahasa Inggris Tingkat Lanjut, Antropologi",
        tips: "Wajib menyiapkan portofolio karya seni dan desain sesuai ketentuan panitia SNBP."
    },
    pgsd: {
        nama: "Pendidikan Guru Sekolah Dasar (PGSD)",
        wajib: "Sosiologi, Pendidikan Pancasila (Mapel Wajib)",
        saran: "Biologi, Matematika Tingkat Lanjut, Bahasa Indonesia Tingkat Lanjut",
        tips: "Guru SD mengajar lintas bidang, sehingga kestabilan nilai di semua mata pelajaran umum sangat diperhatikan."
    }
};

function filterJurusan() {
    const kataKunci = document.getElementById("cariJurusan").value.toLowerCase();
    const semuaKotak = document.querySelectorAll("#daftarJurusanGrid .option-box");
    for (let i = 0; i < semuaKotak.length; i++) {
        const kotak = semuaKotak.item(i);
        const namaJurusan = kotak.getAttribute("data-nama");
        kotak.style.display = namaJurusan.indexOf(kataKunci) !== -1 ? "flex" : "none";
    }
}
function cekMapel() {
    const terpilih = document.querySelector('input[name="jurusanRadio"]:checked');
    const container = document.getElementById("hasilMapel");
    if (!terpilih || !container) return;

    const kunci = terpilih.value;
    const data = dataJurusan[kunci];
    if (!data) return;

    container.innerHTML = "";

    const judul = document.createElement("h3");
    judul.className = "result-title";
    judul.textContent = data.nama;

    const blokWajib = document.createElement("div");
    blokWajib.className = "result-block";
    const labelWajib = document.createElement("span");
    labelWajib.className = "result-label-priority";
    labelWajib.textContent = "Prioritas Utama (Mapel Pendukung SNBP):";
    const isiWajib = document.createElement("p");
    isiWajib.className = "result-value-priority";
    isiWajib.textContent = data.wajib;
    blokWajib.appendChild(labelWajib);
    blokWajib.appendChild(isiWajib);

    const blokSaran = document.createElement("div");
    blokSaran.className = "result-block";
    const labelSaran = document.createElement("span");
    labelSaran.className = "result-label-secondary";
    labelSaran.textContent = "Mapel Pelengkap yang Disarankan:";
    const isiSaran = document.createElement("p");
    isiSaran.className = "result-value-secondary";
    isiSaran.textContent = data.saran;
    blokSaran.appendChild(labelSaran);
    blokSaran.appendChild(isiSaran);

    const blokTips = document.createElement("div");
    blokTips.className = "strategy-box";
    const boldStrategi = document.createElement("strong");
    boldStrategi.textContent = "Strategi: ";
    const spanTips = document.createElement("span");
    spanTips.textContent = data.tips;
    blokTips.appendChild(boldStrategi);
    blokTips.appendChild(spanTips);

    container.appendChild(judul);
    container.appendChild(blokWajib);
    container.appendChild(blokSaran);
    container.appendChild(blokTips);
}

function bacaSatuNilai(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    const teks = el.value.trim();
    if (teks === "") return 0;
    let angka = parseFloat(teks);
    if (isNaN(angka)) return 0;
    if (angka > 100) { angka = 100; el.value = 100; }
    if (angka < 0) { angka = 0; el.value = 0; }
    return angka;
}

function aturBatang(nomor, nilai, minSkala) {
    const lbl = document.getElementById("lbl" + nomor);
    const bar = document.getElementById("bar" + nomor);
    if (lbl) lbl.textContent = nilai;
    if (bar) {
        if (nilai <= 0) {
            bar.style.height = "6%";
            bar.style.backgroundColor = "#d4d4d8";
        } else {
            const rentang = 100 - minSkala;
            let persen = ((nilai - minSkala) / rentang) * 72;
            if (persen < 10) persen = 10;
            if (persen > 76) persen = 76;
            bar.style.height = persen.toFixed(1) + "%";
            bar.style.backgroundColor = "#2563eb";
        }
    }
}

function updateGrafik() {
    const v1 = bacaSatuNilai("sem1");
    const v2 = bacaSatuNilai("sem2");
    const v3 = bacaSatuNilai("sem3");
    const v4 = bacaSatuNilai("sem4");
    const v5 = bacaSatuNilai("sem5");

    let minVal = 100;
    let adaPositif = false;
    const daftar = new Array(v1, v2, v3, v4, v5);
    for (let i = 0; i < 5; i++) {
        if (daftar.at(i) > 0) {
            adaPositif = true;
            if (daftar.at(i) < minVal) minVal = daftar.at(i);
        }
    }
    if (!adaPositif) minVal = 65;
    const minSkala = Math.max(0, minVal - 10);

    aturBatang(1, v1, minSkala);
    aturBatang(2, v2, minSkala);
    aturBatang(3, v3, minSkala);
    aturBatang(4, v4, minSkala);
    aturBatang(5, v5, minSkala);

    const rataRata = ((v1 + v2 + v3 + v4 + v5) / 5).toFixed(2);
    const statusEl = document.getElementById("statusTren");
    if (statusEl) {
        statusEl.innerHTML = "";
        let jumlahTurun = 0;
        if (v2 < v1) jumlahTurun++;
        if (v3 < v2) jumlahTurun++;
        if (v4 < v3) jumlahTurun++;
        if (v5 < v4) jumlahTurun++;

        const judulStatus = document.createElement("strong");
        const teksStatus = document.createElement("span");
        const rataAngka = parseFloat(rataRata);

        if (v1 === 0 || v2 === 0 || v3 === 0 || v4 === 0 || v5 === 0) {
            statusEl.className = "status-banner status-warn";
            judulStatus.textContent = "Data Belum Lengkap: ";
            teksStatus.textContent = "Silakan isi seluruh nilai semester 1 sampai 5 dengan nilai asli (lebih dari 0) untuk melihat analisis tren SNBP yang akurat.";
        } else if (rataAngka < 75) {
            statusEl.className = "status-banner status-warn";
            judulStatus.textContent = "Perlu Peningkatan: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Nilai masih di bawah batas aman persaingan SNBP. Fokus kejar nilai pada semester yang tersisa.";
        } else if (jumlahTurun === 0 && v5 > v1) {
            statusEl.className = "status-banner status-good";
            judulStatus.textContent = "Tren Sangat Bagus: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Grafik nilaimu konsisten naik dari semester 1 hingga 5, sangat ideal untuk penilaian SNBP.";
        } else if (jumlahTurun === 0 && v5 === v1) {
            statusEl.className = "status-banner status-good";
            judulStatus.textContent = "Tren Konsisten Stabil: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Nilaimu terjaga sangat stabil tanpa penurunan dari semester 1 hingga 5.";
        } else if (rataAngka >= 90) {
            statusEl.className = "status-banner status-good";
            judulStatus.textContent = "Rata-Rata Sangat Tinggi: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Meskipun ada sedikit penurunan di semester tertentu, capaian nilaimu tetap sangat kompetitif untuk SNBP.";
        } else if (v5 >= v1 && jumlahTurun === 1) {
            statusEl.className = "status-banner status-good";
            judulStatus.textContent = "Tren Cukup Stabil: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Sempat ada sedikit penurunan, tetapi grafik akhirmu berhasil pulih dan meningkat.";
        } else {
            statusEl.className = "status-banner status-warn";
            judulStatus.textContent = "Perhatian: ";
            teksStatus.textContent = "Rata-rata keseluruhan " + rataRata + ". Terdeteksi penurunan grafik pada " + jumlahTurun + " semester. Usahakan menjaga kestabilan nilai pada mata pelajaran pendukung.";
        }

        statusEl.appendChild(judulStatus);
        statusEl.appendChild(teksStatus);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateGrafik();
});
