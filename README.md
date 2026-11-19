# Jalur Merdeka

**Jalur Merdeka** merupakan aplikasi berbasis web interaktif untuk membantu pelajar SMA yang menerapkan Kurikulum Merdeka dalam merencanakan paket mata pelajaran pilihan kelas 11 serta memetakan strategi kelulusan jalur SNBP (Seleksi Nasional Berdasarkan Prestasi). Proyek ini dikembangkan untuk menjawab kebingungan siswa kelas 10 saat menentukan paket peminatan SMA, sekaligus membantu siswa kelas 11 dan 12 memantau kesesuaian mata pelajaran yang diambil dengan syarat program studi kuliah serta kestabilan grafik nilai rapor dari semester 1 hingga 5 secara mandiri.

Akses langsung website melalui tautan **https://gedeyogi1307-ops.github.io/edu-plan/**


**— Teknologi yang Digunakan**
- **HTML & CSS** sebagai kerangka struktur multi-halaman (`index.html` dan `kelas10.html`) serta tata letak responsif dengan gaya desain warna solid kontras tinggi tanpa gradasi dan grid kartu otomatis.
- **JavaScript** untuk logika interaktif pencarian jurusan secara *real-time*, pencocokan mata pelajaran pendukung SNBP, perhitungan otomatis tinggi batang grafik rapor, serta analisis tren nilai per semester.
- **System UI Fonts** untuk memastikan tipografi antarmuka terbaca tajam, ringan, dan cepat dimuat di berbagai perangkat tanpa bergantung pada koneksi font eksternal.
- **GitHub & GitHub Pages** sebagai repositori kode sumber dan layanan publikasi (*hosting*) situs web.


**— Pemanfaatan AI (AI Usage Disclosure)**
Dalam pengembangan proyek ini, kami memanfaatkan **Google Gemini** sebagai asisten pemrograman dan diskusi perancangan. Salah satu perintah (*prompt*) utama yang kami gunakan pada tahap penyusunan kode adalah sebagai berikut.

> "Buatkan struktur file HTML, CSS, dan JS terpisah (index.html, kelas10.html, style.css, script.js, kelas10.js) untuk Jalur Merdeka. Gunakan palet warna solid kontras tinggi dengan bayangan tegas tanpa gradasi, larang penggunaan emoji, buat grafik perkembangan nilai rapor tanpa pustaka eksternal yang berat, serta keluarkan kode bersih."

Terhadap saran dan keluaran kode dari AI, kemudian kami melakukan beberapa penyesuaian. Kami menghapus fitur Bank Ide P5 dari rancangan awal agar fokus aplikasi lebih tajam pada perencanaan akademik, memisahkan halaman khusus siswa kelas 10 (`kelas10.html`) dengan halaman strategi kuliah kelas 11–12 (`index.html`), menyusun ulang basis data 12 program studi beserta mapel pendukung SNBP sesuai Kurikulum Merdeka, serta menyempurnakan logika kondisi analisis grafik rapor agar mampu mendeteksi input kosong, nilai datar yang konsisten, maupun rata-rata nilai tinggi secara akurat. Catatan interaksi selengkapnya terdokumentasi pada berkas **AI_LOGBOOK.md**.


**— Panduan Penggunaan**
- **Rekomendasi Peminatan Kelas 10**: Buka menu **Peminatan Kelas 10**, lalu klik salah satu kotak **Bidang Minat Utama** (seperti Kesehatan, Teknik, atau Bisnis) untuk melihat rekomendasi 4 mata pelajaran pilihan kelas 11 beserta prospek jurusan kuliah yang linear.
- **Analisis Nilai Rapor Kelas 10**: Pada bagian bawah halaman Kelas 10, masukkan nilai rata-rata kelompok mapel **MTK, IPA, IPS, dan Bahasa** pada Semester 1 & 2 untuk melihat grafik kekuatan nilai dan rekomendasi paket peminatan otomatis.
- **Pencocok Mapel & Jurusan SNBP**: Buka menu **Strategi Kuliah**, gunakan kolom pencarian atau klik salah satu dari **12 Program Studi Impian** untuk mengetahui mapel prioritas utama SNBP, mapel pelengkap yang disarankan, serta strategi nilai rapor.
- **Kalkulator Tren Nilai Rapor**: Masukkan rata-rata nilai rapor **Semester 1 hingga Semester 5** untuk memantau grafik batang perkembangan nilai secara *real-time* beserta status evaluasi kelayakan tren untuk SNBP.


**— Identitas Pengembang**
- **Anggota 1:** *I GEDE YOGI ARDINATHA UTAMA — Kelas X-5 — SMA NEGERI 1 MADIUN*
- **Anggota 2:** *LOIS TIMOTEA SUGIARTO — Kelas X-7 — SMA NEGERI 1 MADIUN*
- **Kegiatan:** *Pelatihan TIK bagi Murid (LATIKA) Tahun 2026 — Gelombang 4 Wilayah Kota Madiun*
