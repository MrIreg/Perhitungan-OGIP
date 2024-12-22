// Fungsi untuk menghitung OGIP
function calculateOGIP() {
    const area = parseFloat(document.getElementById("area").value);
    const thickness = parseFloat(document.getElementById("thickness").value);
    const porosity = parseFloat(document.getElementById("porosity").value);
    const saturation = parseFloat(document.getElementById("saturation").value);
    const bg = parseFloat(document.getElementById("bg").value);

    if (isNaN(area) || isNaN(thickness) || isNaN(porosity) || isNaN(saturation) || isNaN(bg)) {
        alert("Harap masukkan semua nilai dengan benar.");
        return;
    }

    const OGIP = (43560 * area * thickness * porosity * saturation) / bg;

    // Tampilkan hasil ke dalam modal
    document.getElementById("resultText").innerText = `OGIP: ${OGIP.toLocaleString('en-US', {maximumFractionDigits: 2})} SCF`;

    const modal = document.getElementById("resultModal");
    modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("resultModal").style.display = "none";
}

// Event Listener
document.getElementById("calculateBtn").addEventListener("click", calculateOGIP);
document.getElementById("closeBtn").addEventListener("click", closeModal);
