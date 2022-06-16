const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 8000,
    disableOnInetarction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
