# Logbook Pemanfaatan Kecerdasan Artifisial (AI_LOGBOOK.md)

**Nama Proyek:** Jalur Merdeka - Simulator Mapel & Strategi SNBP  
**Tema Pelatihan:** Solusi Digital untuk Kehidupan Sehari-hari Berbantuan Kecerdasan Artifisial  
**Alat AI yang Digunakan:** Google Gemini  

---

## Tahap 1: Eksplorasi Ide & Perancangan Solusi
* **Tujuan Interaksi:** Menentukan konsep aplikasi web yang bermanfaat bagi siswa SMA Kurikulum Merdeka dalam merencanakan pemilihan mata pelajaran kelas 11 dan strategi masuk perguruan tinggi (SNBP).
* **Ringkasan Prompt:** Meminta rancangan konsep situs web edukasi untuk siswa SMA agar tidak salah memilih paket mata pelajaran pilihan, lengkap dengan fitur simulasi jurusan kuliah dan pemantau grafik nilai rapor.
* **Saran AI:** AI menyarankan pembuatan web statis interaktif bernama *Jalur Merdeka* yang terdiri dari tiga fitur utama: Pencocok Mapel & Jurusan SNBP, Kalkulator Tren Nilai Rapor (Semester 1–5), dan Bank Ide Proyek P5.
* **Validasi & Modifikasi Mandiri:**  
  Setelah menguji alur penggunaan bagi siswa SMA, kami memutuskan untuk **menghapus fitur Bank Ide P5** agar fokus aplikasi lebih tajam pada perencanaan akademik. Sebagai gantinya, kami **menambahkan halaman terpisah (`kelas10.html`)** khusus untuk membantu siswa kelas 10 memilih paket peminatan kelas 11 berdasarkan nilai rapor semester awal.

---

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)
* **Tujuan Interaksi:** Membangun struktur antarmuka HTML, tata letak CSS yang responsif dengan gaya desain tegas (*neobrutalism* tanpa gradasi), serta logika JavaScript untuk pengolahan data jurusan dan grafik batang.
* **Ringkasan Prompt:** Meminta kerangka kode `index.html`, `style.css`, dan `script.js` dengan tema warna solid kontras tinggi, tombol pilihan berbentuk kotak interaktif, dan grafik perkembangan nilai rapor tanpa pustaka eksternal yang berat.
* **Saran AI:** AI memberikan struktur CSS berbasis CSS Grid (`auto-fit` dan `minmax`) serta pemisahan file antara halaman utama (`index.html` & `script.js`) dan halaman peminatan kelas 10 (`kelas10.html` & `kelas10.js`).
* **Validasi & Modifikasi Mandiri:**  
  Kami melakukan penyesuaian pada daftar program studi agar mencakup 12 jurusan populer di kalangan siswa SMA (seperti Kedokteran, Farmasi, Teknik Informatika, Psikologi, DKV, hingga PGSD) beserta mata pelajaran pendukung SNBP yang sesuai dengan regulasi Kurikulum Merdeka terbaru. Kami juga menambahkan fitur pencarian *real-time* (`filterJurusan()`) agar siswa lebih cepat menemukan jurusannya.

---

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)
* **Tujuan Interaksi:** Memperbaiki sejumlah bug tampilan dan logika perhitungan yang muncul saat uji coba langsung di browser dan GitHub Pages.
* **Ringkasan Prompt:** Melaporkan kendala grafik rapor yang tidak muncul, teks tips jurusan yang tidak tampil, sisa elemen P5 yang masih tertinggal di halaman, serta pesan status analisis yang tidak akurat saat nilai diisi angka nol atau kembar.
* **Saran AI:**  
  1. Mengganti metode rendering grafik dari SVG/Canvas ke elemen batang HTML (`<div>`) berbasis persentase tinggi dinamis agar lebih stabil di semua peramban.  
  2. Memperbaiki pembuatan elemen teks tips jurusan menggunakan `document.createElement("span")` pada fungsi `cekMapel()`.  
  3. Menambahkan parameter versi pada pemanggilan skrip (`script.js?v=2026`) untuk mengatasi masalah *cache* GitHub Pages.
* **Validasi & Modifikasi Mandiri:**  
  Saat menguji kalkulator rapor dengan skenario ekstrem (mengisi nilai `0`, mengisi nilai kembar `99` di semua semester, serta skenario nilai tinggi yang turun di semester 5), kami menemukan pesan status yang kurang tepat. Kami memodifikasi percabangan `if-else` pada fungsi `updateGrafik()` untuk menambahkan:  
  * Peringatan **"Data Belum Lengkap"** jika ada nilai `0`.  
  * Kategori **"Tren Konsisten Stabil"** jika seluruh semester bernilai sama.  
  * Kategori **"Rata-Rata Sangat Tinggi"** jika rata-rata mencapai `>= 90` meskipun terjadi penurunan di satu semester.

---

## Tahap 4: Refleksi & Penjelasan Kode
* **Pemahaman Struktur Program:**  
  * **`index.html` & `kelas10.html`:** Mengatur struktur semantik halaman (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`) serta formulir input nilai (`<input type="number">`) dan pilihan jurusan (`<input type="radio">`).  
  * **`style.css`:** Mengatur sistem variabel warna (`:root`), bayangan kotak tegas (`box-shadow`), dan responsivitas tata letak layar menggunakan `grid-template-columns: repeat(auto-fit, minmax(...))` sehingga tampilan otomatis menyesuaikan di layar ponsel maupun laptop.  
  * **`script.js` & `kelas10.js`:** Menyimpan basis data objek jurusan (`dataJurusan` dan `paketKelas10`), memanipulasi DOM secara dinamis saat pengguna memilih jurusan, memvalidasi rentang input angka `0–100` (`bacaSatuNilai()`), serta menghitung proporsi tinggi grafik batang dan rata-rata rapor secara *real-time*.
* **Kesimpulan Pemanfaatan AI:** Penggunaan AI sangat mempercepat proses *prototyping* dan *debugging* tata letak maupun logika DOM JavaScript, namun pengujian skenario pengguna secara langsung dan penyesuaian logika bisnis tetap harus dilakukan secara mandiri agar aplikasi benar-benar akurat dan bebas dari galat.
