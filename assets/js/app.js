const menuBtn = document.querySelector('#nav-btn__btn');
const nav = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.menu__link')

menuBtn.onclick = function () {
    nav.classList.toggle('displayed');
};

navLinks.onclick = function () {
    console.log("clicked");
    nav.classList.toggle('displayed');
};
