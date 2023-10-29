const images = ["FOTO-1-removebg-preview.png", "FOTO-2-removebg-preview.png", "FOTO-3-removebg-preview.png",
"FOTO-4-removebg-preview.png", "FOTO-5-removebg-preview.png", "FOTO-6-removebg-preview.png", "FOTO-7-removebg-preview.png",
"FOTO-7-removebg-preview.png", "FOTO-8-removebg-preview.png", "FOTO-9-removebg-preview.png", "FOTO-10-removebg-preview.png",
"FOTO-11-removebg-preview.png", "FOTO-12-removebg-preview.png", "FOTO-13-removebg-preview.png", "FOTO-14-removebg-preview.png",
"FOTO-15-removebg-preview.png", "FOTO-16-removebg-preview.png", "FOTO-17-removebg-preview.png", "FOTO-18-removebg-preview.png",
"FOTO-19-removebg-preview.png", "FOTO-20-removebg-preview.png"]; // Daftar gambar yang akan ditampilkan
let currentIndex = 0;

const displayedImage = document.getElementById("displayed-image");
const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button");

        // Fungsi untuk mengganti gambar ke gambar sebelumnya
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            displayedImage.src = images[currentIndex];
        }

// Fungsi untuk mengganti gambar
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayedImage.src = images[currentIndex];
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", changeImage);


document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen pop-up dan audio
    var popup = document.getElementById("popup");
    var audio = document.getElementById("audio");

    // Ambil tombol "Putar Lagu"
    var playButton = document.getElementById("playButton");

    // Tambahkan event listener untuk tombol "Putar Lagu"
    playButton.addEventListener("click", function () {
        // Sembunyikan pop-up
        popup.style.display = "none";

        // Putar lagu
        audio.play();
    });
});