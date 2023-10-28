let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-bar");

searchBtn.onclick = () => {
  //   console.log("clicked btn");
  searchForm.classList.toggle("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");
  shopingCart.classList.remove("active");
};
let shopingCart = document.querySelector(".shoping-cart");
let shoppingBtn = document.querySelector("#shoping-bar");

shoppingBtn.onclick = () => {
  //   console.log("clicked btn");
  shopingCart.classList.toggle("active");
  navBar.classList.remove("active");
  loginForm.classList.remove("active");

  searchForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");
let user = document.querySelector("#user-bar");

user.onclick = () => {
  //   console.log("clicked btn");
  loginForm.classList.toggle("active");
  navBar.classList.remove("active");

  shopingCart.classList.remove("active");
  searchForm.classList.remove("active");
};
let navBar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-bar");

menu.onclick = () => {
  navBar.classList.toggle("active");
  loginForm.classList.remove("active");
  shopingCart.classList.remove("active");
  searchForm.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
