const paketKelas10 = {
    kesehatan: {
        nama: "Paket Kesehatan & Ilmu Hayati",
        mapel: "Biologi, Kimia, Matematika Tingkat Lanjut, Bahasa Inggris Tingkat Lanjut",
        prodi: "Kedokteran, Farmasi, Keperawatan, Gizi, Kesehatan Masyarakat",
        alasan: "Kombinasi Biologi dan Kimia menjadi syarat mutlak hampir seluruh program studi rumpun kesehatan di jalur SNBP."
    },
    teknik: {
        nama: "Paket Rekayasa, Sains & Teknologi",
        mapel: "Matematika Tingkat Lanjut, Fisika, Informatika, Kimia",
        prodi: "Teknik Informatika, Teknik Sipil, Teknik Industri, Teknik Elektro, Arsitektur",
        alasan: "Matematika Tingkat Lanjut dan Fisika melatih logika pemecahan masalah yang dibutuhkan di seluruh fakultas teknik."
    },
    bisnis: {
        nama: "Paket Ekonomi, Manajemen & Keuangan",
        mapel: "Ekonomi, Matematika Tingkat Lanjut, Sosiologi, Bahasa Inggris Tingkat Lanjut",
        prodi: "Manajemen, Akuntansi, Ilmu Ekonomi, Bisnis Digital, Administrasi Bisnis",
        alasan: "Ekonomi adalah mata pelajaran inti, sedangkan Matematika Tingkat Lanjut membantu analisis statistik dan keuangan."
    },
    sosial: {
        nama: "Paket Hukum, Politik & Humaniora",
        mapel: "Sosiologi, Antropologi, Sejarah Tingkat Lanjut, Bahasa Indonesia Tingkat Lanjut",
        prodi: "Ilmu Hukum, Ilmu Komunikasi, Ilmu Politik, Administrasi Publik, Kriminologi",
        alasan: "Sosiologi dan Sejarah Tingkat Lanjut membangun kemampuan analisis regulasi dan dinamika masyarakat."
    },
    bahasa: {
        nama: "Paket Bahasa, Diplomasi & Hubungan Global",
        mapel: "Bahasa Inggris Tingkat Lanjut, Sosiologi, Geografi, Bahasa Asing Lainnya",
        prodi: "Hubungan Internasional, Sastra Inggris, Pariwisata, Ilmu Komunikasi",
        alasan: "Penguasaan bahasa asing dan wawasan kewilayahan menjadi modal utama untuk studi bertaraf internasional."
    },
    kreatif: {
        nama: "Paket Industri Kreatif, Seni & Desain",
        mapel: "Seni Rupa, Informatika, Sosiologi, Bahasa Inggris Tingkat Lanjut",
        prodi: "Desain Komunikasi Visual (DKV), Desain Produk, Film dan Televisi, Kriya",
        alasan: "Seni Rupa mengasah kepekaan visual dan membantu penyusunan portofolio karya wajib SNBP."
    }
};

function cekMinatKelas10() {
    const terpilih = document.querySelector('input[name="minatRadio"]:checked');
    const container = document.getElementById("hasilMinat10");
    if (!terpilih || !container) return;

    const data = paketKelas10[terpilih.value];
    if (!data) return;

    container.innerHTML = "";

    const judul = document.createElement("h3");
    judul.className = "result-title";
    judul.textContent = data.nama;

    const blokMapel = document.createElement("div");
    blokMapel.className = "result-block";
    const labelMapel = document.createElement("span");
    labelMapel.className = "result-label-priority";
    labelMapel.textContent = "Rekomendasi 4 Mapel Pilihan Kelas 11:";
    const isiMapel = document.createElement("p");
    isiMapel.className = "result-value-priority";
    isiMapel.textContent = data.mapel;
    blokMapel.appendChild(labelMapel);
    blokMapel.appendChild(isiMapel);

    const blokProdi = document.createElement("div");
    blokProdi.className = "result-block";
    const labelProdi = document.createElement("span");
    labelProdi.className = "result-label-secondary";
    labelProdi.textContent = "Prospek Jurusan Kuliah yang Linear:";
    const isiProdi = document.createElement("p");
    isiProdi.className = "result-value-secondary";
    isiProdi.textContent = data.prodi;
    blokProdi.appendChild(labelProdi);
    blokProdi.appendChild(isiProdi);

    const blokAlasan = document.createElement("div");
    blokAlasan.className = "strategy-box";
    const boldAlasan = document.createElement("strong");
    boldAlasan.textContent = "Alasan Pemilihan: ";
    const spanAlasan = document.createElement("span");
    spanAlasan.textContent = data.alasan;
    blokAlasan.appendChild(boldAlasan);
    blokAlasan.appendChild(spanAlasan);

    container.appendChild(judul);
    container.appendChild(blokMapel);
    container.appendChild(blokProdi);
    container.appendChild(blokAlasan);
}
function bacaNilai10(id) {
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

function aturBatang10(nomor, nilai, minSkala) {
    const lbl = document.getElementById("lblK" + nomor);
    const bar = document.getElementById("barK" + nomor);
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

function updateGrafik10() {
    const mtk = bacaNilai10("nMtk");
    const ipa = bacaNilai10("nIpa");
    const ips = bacaNilai10("nIps");
    const bhs = bacaNilai10("nBhs");

    let minVal = 100;
    let adaPositif = false;
    const daftar = [mtk, ipa, ips, bhs];
    for (let i = 0; i < 4; i++) {
        if (daftar[i] > 0) {
            adaPositif = true;
            if (daftar[i] < minVal) minVal = daftar[i];
        }
    }
    if (!adaPositif) minVal = 65;
    const minSkala = Math.max(0, minVal - 10);

    aturBatang10(1, mtk, minSkala);
    aturBatang10(2, ipa, minSkala);
    aturBatang10(3, ips, minSkala);
    aturBatang10(4, bhs, minSkala);

    const statusEl = document.getElementById("statusNilai10");
    if (!statusEl) return;

    statusEl.innerHTML = "";
    const judul = document.createElement("strong");
    const teks = document.createElement("span");

    if (mtk === 0 || ipa === 0 || ips === 0 || bhs === 0) {
        statusEl.className = "status-banner status-warn";
        judul.textContent = "Data Belum Lengkap: ";
        teks.textContent = "Isi keempat kelompok nilai rapor kelas 10 (lebih dari 0) untuk melihat analisis rekomendasi peminatan.";
    } else {
        const nilaiTertinggi = Math.max(mtk, ipa, ips, bhs);
        statusEl.className = "status-banner status-good";
        judul.textContent = "Rekomendasi Berbasis Nilai: ";

        if (nilaiTertinggi === ipa || (nilaiTertinggi === mtk && ipa >= ips)) {
            teks.textContent = "Nilai eksakta (IPA & Matematika) paling menonjol. Kamu sangat cocok mengambil Paket Kesehatan atau Paket Teknik & Sains.";
        } else if (nilaiTertinggi === ips || (nilaiTertinggi === mtk && ips > ipa)) {
            teks.textContent = "Nilai rumpun sosial dan hitunganmu sangat kuat. Paket Ekonomi & Bisnis atau Paket Hukum & Sosial sangat direkomendasikan.";
        } else {
            teks.textContent = "Nilai kemampuan bahasamu paling unggul. Paket Bahasa & Diplomasi atau Paket Industri Kreatif bisa menjadi pilihan terbaik.";
        }
    }

    statusEl.appendChild(judul);
    statusEl.appendChild(teks);
}

document.addEventListener("DOMContentLoaded", function() {
    updateGrafik10();
});
