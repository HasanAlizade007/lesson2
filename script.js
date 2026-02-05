// Şəkil linklərini massivdə saxlayırıq
const images = [
    "https://picsum.photos/id/10/600/400",
    "https://picsum.photos/id/20/600/400",
    "https://picsum.photos/id/30/600/400",
    "https://picsum.photos/id/40/600/400"
];

let currentIndex = 0; // Başlanğıc index

// Elementləri seçirik
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Şəkli yeniləyən funksiya
function updateSlider() {
    sliderImage.src = images[currentIndex];
}

// "Next" düyməsi kliklənəndə
nextBtn.addEventListener('click', () => {
    currentIndex++; // İndeksi 1 artır
    if (currentIndex >= images.length) {
        currentIndex = 0; // Sona çatıbsa, birinciyə qayıt
    }
    updateSlider();
});

// "Previous" düyməsi kliklənəndə
prevBtn.addEventListener('click', () => {
    currentIndex--; // İndeksi 1 azalt
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Birincidədirsə, axırıncıya get
    }
    updateSlider();
});