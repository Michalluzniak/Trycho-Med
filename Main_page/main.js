// create div elements for problems section and

const problemContainer = document.querySelector('.problems__points');

const createDiv = function () {
    let problemNumber = 2;
    const problemsDescriptionsArray = [
        "Łysieniem androgenowym", "Wszystkimi rodzajami łupieżu", "Świądem skory głowy", "Przesuszona/ odwodniona skóra głowy", "Nadwrażliwość skory głowy",
        "Uszkodzeniami łodygi włosa", "Po przeszczepie włosów"
    ]

    for (let i = 0; i < 7; i++) {
        const newDiv = document.createElement('div');
        const newParagraph = document.createElement('p');
        newDiv.className = `problem__${problemNumber++} allPoints`;
        problemContainer.appendChild(newDiv);
        newDiv.appendChild(newParagraph);
        newParagraph.textContent = problemsDescriptionsArray[i];
    }
}
window.onload = createDiv;

//slider
const carouselImages = document.querySelector('.carousel__images');
let slides = [...carouselImages.children];
const nextBtn = document.querySelector('.carousel__button__right');
const prevBtn = document.querySelector('.carousel__button__left');
const dotsNavBar = document.querySelector('.carousel__nav');
const dots = [...dotsNavBar.children];

let index = 1;
let slideInterval;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

carouselImages.append(firstClone);
carouselImages.prepend(lastClone);

const slideWidth = slides[index].clientWidth;
carouselImages.style.transform = `translateX(${-slideWidth * index}px)`;


const autoSlideChange = () => {
    slideInterval = setInterval(() => {
        nextSlide()
    }, 200000000);
}

const infiniteCarousel = () => {
    let slides = [...carouselImages.children];
    if (slides[index].id === firstClone.id) {
        carouselImages.style.transition = 'none'
        index = 1;
        carouselImages.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if (slides[index].id === lastClone.id) {
        carouselImages.style.transition = 'none'
        index = slides.length - 2;
        carouselImages.style.transform = `translateX(${-slideWidth * index}px)`;
    }
}
const nextSlide = () => {
    let slides = [...carouselImages.children];
    if (index >= slides.length - 1) return;
    index++;

    carouselImages.style.transform = `translateX(${-slideWidth * index}px)`;
    carouselImages.style.transition = '.7s ease-out'

    let currentDot = dots[index - 2];
    let nextDot = dots[index - 1]

    if (index == 10) {
        currentDot = dots[dots.length - 1]
        nextDot = dots[0]
    }
    currentDot.classList.remove('current');
    nextDot.classList.add('current');

}
const prevSlide = () => {
    let slides = [...carouselImages.children];
    if (index <= 0) return
    index--;

    carouselImages.style.transform = `translateX(${-slideWidth * index}px)`;
    carouselImages.style.transition = '.7s ease-out'

    let currentDot = dots[index];
    let nextDot = dots[index - 1]

    if (index == 0) {
        currentDot = dots[0]
        nextDot = dots[dots.length - 1]
    }
    currentDot.classList.remove('current');
    nextDot.classList.add('current');
}
const chooseSlide = (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const dotsIndex = dots.indexOf(targetDot);
    carouselImages.style.transform = `translateX(${-slideWidth * (dotsIndex + 1)}px)`;
    carouselImages.style.transition = '.7s ease-out'
    let currentDot = dotsNavBar.querySelector('.current');

    let nextDot = targetDot;
    index = dotsIndex + 1;
    currentDot.classList.remove('current');
    nextDot.classList.add('current');
}

autoSlideChange();

carouselImages.addEventListener('transitionend', infiniteCarousel);

carouselImages.addEventListener('mouseenter', () => {
    clearInterval(slideInterval)
})
carouselImages.addEventListener('mouseleave', autoSlideChange);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dotsNavBar.addEventListener('click', chooseSlide);