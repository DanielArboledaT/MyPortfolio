var swiper = new Swiper('.blog-slider', {
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


function downloadCv() {
    window.open('https://drive.google.com/file/d/1op_JhcFF7lAjrmltE_NmU8mMwI0xkKAJ/view?usp=sharing');
}