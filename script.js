//const hamburger = document.querySelector(".hamburger-lines");
//const menuLinks = document.querySelector(".menu-links");

//hamburger.addEventListener("click", function () {
//menuLinks.classList.add("open");
//});

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
