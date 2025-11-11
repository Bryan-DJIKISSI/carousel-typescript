"use strict";
const carousel = document.getElementById('carousel');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const cards = document.querySelectorAll('.card');
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
function nextSlide() {
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
        updateCarousel();
    }
}
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
navRight.addEventListener('click', nextSlide);
navLeft.addEventListener('click', prevSlide);
updateCardsPerView();
updateCarousel();
//# sourceMappingURL=caroussel.js.map