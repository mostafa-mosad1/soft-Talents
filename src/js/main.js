const links = document.getElementById("links");
const menu = document.getElementById("menu");
const AllLinks = document.querySelectorAll('a[href^="#"]');

let x = false;

menu.addEventListener("click", function (e) {
  x = !x;
  if (x) {
    links.classList.remove("hidden");
    links.classList.add("flex");
  } else {
    links.classList.add("hidden");
    links.classList.remove("flex");
  }
  console.log("toogle");
});

const singleImageSwiper = new Swiper(".mySingleImageSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const multiImageSwiper = new Swiper(".myMultiImageSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

AllLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
