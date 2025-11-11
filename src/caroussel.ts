const carousel = document.getElementById('carousel') as HTMLElement;
const navLeft = document.querySelector('.nav-left') as HTMLElement;
const navRight = document.querySelector('.nav-right') as HTMLElement;
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

let autoScrolInterval: number | null =  null;
let autoScrollDelay: number = 3000;

let currentIndex: number = 0;
const totalCards: number = cards.length;
let cardsPerView: number = 3;

function updateCardsPerView(): void {
    const width = window.innerWidth;

    if (width <= 640) {
        cardsPerView = 1;
    } else if (width <= 968) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
}

function updateCarousel(): void {
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 20;
    const translateValue = -(currentIndex * (cardWidth + gap));
    carousel.style.transform = `translateX(${translateValue}px)`;
}

function startAutoScroll():void {
    autoScrolInterval = window.setInterval(() => {
        if(currentIndex < totalCards - cardsPerView) {
            currentIndex++
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, autoScrollDelay);
}

function stopAutoScroll(): void {
    if (autoScrolInterval !== null) {
        clearInterval(autoScrolInterval);
        autoScrolInterval = null;
    }
}

function nextSlide(): void {
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
        updateCarousel();
    }
}

function resetAutoScroll(): void {
    stopAutoScroll();
    startAutoScroll();
}

function prevSlide(): void {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

navRight.addEventListener('click', () =>{
    nextSlide();
    resetAutoScroll();
});
navLeft.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
} );

carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

updateCardsPerView();
updateCarousel();
startAutoScroll();
