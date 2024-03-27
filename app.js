var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true, 
    mousewheel: {
        invert: false,
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
});
