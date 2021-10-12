window.addEventListener("load", function () {

    // phone phone__popup

    const wrapperPopup = document.querySelector('.popup__wrapper');

    const phonePop = function () {
        setTimeout(() => {
            wrapperPopup.classList.add('active');
        }, 1000)
    }

    phonePop();

})

// HAM Menu Button

const hamMenu = document.querySelector('.ham__menu');
const sideMenu = document.querySelector('.side__menu');
const hamMenuLine = document.querySelector('.ham__menu span');
const navButtons = document.querySelectorAll('.nav__btn')

const openSideMenu = () => {
    sideMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');
}

const closeSideMenu = () => {
    sideMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');
}

hamMenu.addEventListener('click', openSideMenu)
navButtons.forEach(btn => btn.addEventListener('click', closeSideMenu));