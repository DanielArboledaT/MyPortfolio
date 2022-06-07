let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
});


//======= Menu show and hiden ============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    });
}

//====== REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



//======= Accordion skills ============
const skillsContent = document.getElementsByClassName('skills_content'),
      skillHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {

    let itemClass = this.parentNode.className;
    console.log("Entre");
    console.log("skillsContent", skillsContent);
    console.log("skillHeader", skillHeader);

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
    }
    if (itemClass == 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }

}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


//======= Portfolio ============
// let swiper = new Swiper('.portfolio_container', {
//     cssMode: true,
//     navegation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     mousewheel: true,
//     keyboard: true,
// });