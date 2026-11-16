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

let raporChart;
function initChart() {
    const ctx = document.getElementById('raporChart').getContext('2d');
    raporChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
            datasets: [{
                label: 'Rata-rata Nilai Rapor',
                data:,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.15)',
                borderWidth: 3,
                tension: 0.2,
                fill: true,
                pointBackgroundColor: '#18181b',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { min: 70, max: 100 }
            }
        }
    });
    updateGrafik();
}

function updateGrafik() {
    const nilai = [
        parseFloat(document.getElementById('sem1').value) || 0,
        parseFloat(document.getElementById('sem2').value) || 0,
        parseFloat(document.getElementById('sem3').value) || 0,
        parseFloat(document.getElementById('sem4').value) || 0,
        parseFloat(document.getElementById('sem5').value) || 0
    ];

    raporChart.data.datasets[0].data = nilai;
    raporChart.update();

    const rataRata = (nilai.reduce((a, b) => a + b, 0) / 5).toFixed(2);
    const statusEl = document.getElementById('statusTren');

    if (nilai[4] > nilai[0] && nilai[4] >= nilai[3]) {
        statusEl.className = "status-banner status-good";
        statusEl.innerHTML = `<strong>Tren Sangat Bagus:</strong> Rata-rata keseluruhan: <strong>${rataRata}</strong>. Grafik nilaimu stabil menanjak, sangat disukai sistem seleksi SNBP.`;
    } else {
        statusEl.className = "status-banner status-warn";
        statusEl.innerHTML = `<strong>Perhatian:</strong> Rata-rata keseluruhan: <strong>${rataRata}</strong>. Ada penurunan di beberapa semester. Fokus tingkatkan nilai mapel pendukung di semester berikutnya.`;
    }
}

window.onload = initChart;
