// Array untuk menyimpan URL gambar
let imageUrls = [];
let currentIndex = 0;

// Fungsi untuk membuka preview gambar
function openPreview(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modal.classList.remove("hidden");

    // Menentukan index gambar saat ini
    currentIndex = imageUrls.indexOf(src);
}

// Fungsi untuk menutup preview
function closePreview() {
    document.getElementById("imageModal").classList.add("hidden");
}

// Fungsi untuk menampilkan gambar berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    document.getElementById("modalImage").src = imageUrls[currentIndex];
}

// Fungsi untuk menampilkan gambar sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    document.getElementById("modalImage").src = imageUrls[currentIndex];
}

// Menutup modal jika klik di luar gambar
document.getElementById("imageModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closePreview();
});

// Inisialisasi array URL gambar
document.querySelectorAll("#imagePreview").forEach((img) => {
    imageUrls.push(img.src);
});
