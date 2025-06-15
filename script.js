document.addEventListener('DOMContentLoaded', () => {
    const cameraMotions = {
        "Static": "Statis",
        "Zoom In": "Perbesar",
        "Zoom Out": "Perkecil",
        "Pan Left": "Geser Kiri",
        "Pan Right": "Geser Kanan",
        "Tilt Up": "Miring ke Atas",
        "Tilt Down": "Miring ke Bawah",
        "Dolly In": "Dolly Masuk",
        "Dolly Out": "Dolly Keluar",
        "Tracking Shot": "Tembakan Pelacakan",
        "Crane Up": "Crane ke Atas",
        "Crane Down": "Crane ke Bawah",
        "Handheld": "Genggam",
        "Aerial View": "Tampilan Udara",
        "Orbit": "Mengorbit",
        "3D Rotation": "Rotasi 3D",
        "Dutch Angle": "Sudut Belanda",
        "Follow": "Ikuti",
        "Rise": "Naik",
        "Fall": "Jatuh",
        "Lock": "Kunci",
        "Unlock": "Buka Kunci",
        "Vortex": "Pusaran",
        "Whip Pan": "Geser Cepat",
        "Snap": "Patah",
        "Speed Ramping": "Perubahan Kecepatan"
    };

    const cameraSelect = document.getElementById('gerakan-kamera');
    for (const [en, id] of Object.entries(cameraMotions)) {
        const option = document.createElement('option');
        option.value = en;
        option.textContent = `${en} (${id})`;
        cameraSelect.appendChild(option);
    }

    document.getElementById('prompt-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const getVal = (id) => document.getElementById(id).value.trim();

        const judulScene = getVal('judul-scene');
        const deskripsiKarakter = getVal('deskripsi-karakter');
        const suaraKarakter = getVal('suara-karakter');
        const aksiKarakter = getVal('aksi-karakter');
        const ekspresiKarakter = getVal('ekspresi-karakter');
        const latarTempat = getVal('latar-tempat');
        const gerakanKamera = document.getElementById('gerakan-kamera').value;
        const detailVisual = getVal('detail-visual');
        const suasana = getVal('suasana');
        const suaraLingkungan = getVal('suara-lingkungan');
        const dialogKarakter = getVal('dialog-karakter');
        const negativePrompt = getVal('negative-prompt');

        const promptIndonesia = `
**Judul Scene:** ${judulScene}

**Deskripsi Karakter Inti:**
${deskripsiKarakter}

**Detail Suara Karakter:**
${suaraKarakter}

**Aksi Karakter:** ${aksiKarakter}

**Ekspresi Karakter:** ${ekspresiKarakter}

**Latar Tempat & Waktu:**
${latarTempat}

**Detail Visual Tambahan:**
Gerakan Kamera: ${gerakanKamera}
${detailVisual}

**Suasana Keseluruhan:** ${suasana}

**Suara Lingkungan/Ambience:**
${suaraLingkungan}

**Dialog Karakter:**
${dialogKarakter}

**Negative Prompt:**
${negativePrompt}
        `.trim();

        document.getElementById('prompt-indonesia').innerText = promptIndonesia;

        // "Translation" logic
        const promptInggris = `
**Scene Title:** ${judulScene}

**Core Character Description:**
${deskripsiKarakter}

**Character Voice Details:**
${suaraKarakter}

**Character Action:** ${aksiKarakter}

**Character Expression:** ${ekspresiKarakter}

**Setting & Time:**
${latarTempat}

**Additional Visual Details:**
Camera Movement: ${gerakanKamera}
${detailVisual}

**Overall Atmosphere:** ${suasana}

**Environmental Sound/Ambience:**
${suaraLingkungan}

**Character Dialogue:**
${dialogKarakter}

**Negative Prompt:**
${negativePrompt}
        `.trim();

        document.getElementById('prompt-inggris').innerText = promptInggris;
    });
}); 