let navMain = document.querySelector(".header__wrapper"); //находим меню
let navToggle = document.querySelector(".header__toggle"); //находим кнопку
let navMenu = document.querySelector(".main-nav"); //находим



navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    //navMenu.classList.remove("main-nav");
    navMain.classList.add("main-nav--opened");
    navMenu.classList.toggle("mobile-menu--show");
    //navMenu.style.display = "flex";
  } else {
    navMain.classList.add("main-nav--closed");
    //navMenu.classList.add("main-nav");
    navMain.classList.remove("main-nav--opened");
    navMenu.classList.remove("mobile-menu--show");
  }
});
