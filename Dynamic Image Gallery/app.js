const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;
let images = [];

async function fetchApi() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
        const data = await response.json();
        images = data.map(img => img.download_url);

        gallery.innerHTML = images.map((src, index) => `
            <img src="${src}" alt="Gallery Image" onclick="openLightbox(${index})">
        `).join("");

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex];
}

fetchApi();