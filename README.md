# EduPLAN
untuk planning pendidikan masa depan
# Jalur Merdeka - Simulator Mapel Pilihan & Strategi SNBP

## 1. Judul & Deskripsi
**Jalur Merdeka** adalah aplikasi web interaktif yang dirancang khusus untuk membantu siswa SMA yang menerapkan **Kurikulum Merdeka** dalam merencanakan pemilihan mata pelajaran (mapel) pilihan di kelas 11 serta memetakan strategi kelulusan jalur **SNBP (Seleksi Nasional Berdasarkan Prestasi)**.

* **Latar Belakang Masalah:** Banyak siswa kelas 10 mengalami kebingungan saat menentukan paket mata pelajaran pilihan untuk kelas 11, sementara siswa kelas 11 dan 12 sering kali kurang memantau kesesuaian mapel yang diambil dengan syarat program studi kuliah serta kestabilan grafik nilai rapor mereka.
* **Target Pengguna:** Siswa SMA kelas 10, kelas 11, dan kelas 12.

---

## 2. Teknologi yang Digunakan
* **Bahasa Pemrograman:** HTML5, CSS3, dan Vanilla JavaScript (ES6+).
* **Pustaka / Eksternal:** Tanpa pustaka pihak ketiga yang berat; grafik batang dibangun secara murni menggunakan manipulasi DOM JavaScript dan transisi CSS.
* **Platform Publikasi:** GitHub Pages.

---

## 3. Pemanfaatan AI (AI Usage Disclosure)
* **Alat AI yang Digunakan:** Google Gemini.
* **Contoh Perintah (Prompt) Utama yang Digunakan:**
  * *"Buatkan rancangan situs web edukasi untuk siswa SMA Kurikulum Merdeka guna mencocokkan mata pelajaran pilihan dengan jurusan SNBP dan menghitung tren nilai rapor semester 1 sampai 5."*
  * *"Buatkan halaman tambahan khusus siswa kelas 10 untuk merekomendasikan paket peminatan kelas 11 beserta grafik analisis nilai rapornya."*
  * *"Perbaiki logika status analisis tren rapor agar mampu mendeteksi input kosong, nilai datar yang konsisten, serta rata-rata nilai tinggi."*
* **Penyesuaian & Perbaikan Mandiri:**
  * Menghapus bagian Bank Ide P5 dari struktur awal dan menggantinya dengan fitur halaman peminatan khusus kelas 10 (`kelas10.html`).
  * Menyusun dan memvalidasi data 12 program studi kuliah beserta daftar mata pelajaran pendukung SNBP yang relevan.
  * Menguji berbagai kombinasi input nilai rapor dan menyempurnakan logika kondisi status analisis pada `script.js` dan `kelas10.js`.

---

## 4. Panduan Penggunaan
* **Tautan Situs Web Aktif:** [Masukkan Tautan GitHub Pages Anda di Sini, misal: https://github.io]
* **Cara Menggunakan Aplikasi:**
  1. **Untuk Siswa Kelas 10 (Menu *Peminatan Kelas 10*):**
     * Klik salah satu kotak **Bidang Minat Utama** untuk melihat rekomendasi 4 mata pelajaran pilihan kelas 11 beserta prospek jurusan kuliah yang linear.
     * Masukkan nilai rata-rata kelompok mapel **MTK, IPA, IPS, dan Bahasa** pada Semester 1 & 2 kelas 10 untuk melihat grafik kekuatan nilai dan rekomendasi paket peminatan otomatis.
  2. **Untuk Siswa Kelas 11 & 12 (Menu *Strategi Kuliah*):**
     * Gunakan kolom pencarian atau klik salah satu dari **12 Program Studi Impian** untuk mengetahui mapel prioritas utama SNBP, mapel pelengkap, dan strategi nilai.
     * Masukkan rata-rata nilai rapor **Semester 1 hingga Semester 5** pada kalkulator tren untuk memantau grafik perkembangan nilai dan status kelayakan tren SNBP.

---

## 5. Identitas Pengembang
* **Anggota 1:** [Nama Lengkap Siswa 1] - Kelas [Contoh: XI-A] / Jurusan [Contoh: MIPA / Mapel Pilihan KKA]
* **Anggota 2:** [Nama Lengkap Siswa 2] - Kelas [Contoh: XI-A] / Jurusan [Contoh: MIPA / Mapel Pilihan KKA]
* **Asal Sekolah:** [Nama SMA Anda, Kabupaten/Kota]
* **Kegiatan:** Pelatihan TIK Bagi Murid SMA/SMK Tahun 2026 (LATIKA) - UPT. TIKP Dinas Pendidikan Provinsi Jawa Timur
