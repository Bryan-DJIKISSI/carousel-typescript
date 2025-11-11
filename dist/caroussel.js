"use strict";
const carousel = document.getElementById('carousel');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const cards = document.querySelectorAll('.card');
let autoScrolInterval = null;
let autoScrollDelay = 3000;
let currentIndex = 0;
const totalCards = cards.length;
let cardsPerView = 3;
function updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 640) {
        cardsPerView = 1;
    }
    else if (width <= 968) {
        cardsPerView = 2;
    }
    else {
        cardsPerView = 3;
    }
}
function updateCarousel() {
    var _a;
    const cardWidth = ((_a = cards[0]) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    const gap = 20;
    const translateValue = -(currentIndex * (cardWidth + gap));
    carousel.style.transform = `translateX(${translateValue}px)`;
}
function startAutoScroll() {
    autoScrolInterval = window.setInterval(() => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
        }
        else {
            currentIndex = 0;
        }
        updateCarousel();
    }, autoScrollDelay);
}
function stopAutoScroll() {
    if (autoScrolInterval !== null) {
        clearInterval(autoScrolInterval);
        autoScrolInterval = null;
    }
}
function nextSlide() {
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
        updateCarousel();
    }
}
function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
}
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
navRight.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
});
navLeft.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
});
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
updateCardsPerView();
updateCarousel();
startAutoScroll();
//# sourceMappingURL=caroussel.js.map