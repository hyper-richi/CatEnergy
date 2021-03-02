var navMain = document.querySelector(".header__wrapper"); //находим меню
var navToggle = document.querySelector(".header__toggle"); //находим кнопку
var navMenu = document.querySelector(".main-nav"); //находим кнопку

//navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMenu.classList.remove("main-nav");

    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMenu.classList.add("main-nav");
    navMain.classList.remove("main-nav--opened");
  }
});
