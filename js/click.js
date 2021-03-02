var sliderBefore = document.querySelector(".image--before"); //находим img before
var sliderAfter = document.querySelector(".image--after"); //находим img after
let range = document.querySelector(".demo__range"); //
let slider = document.querySelector(".slider__range");



var ButtonBefore = document.querySelector(".button--before"); //находим кнопку before
var ButtonAfter = document.querySelector(".button--after"); //находим кнопку after

ButtonBefore.addEventListener("click", function (evt) {
  sliderBefore.style.width = "100%";
  sliderAfter.style.width = "0%";
  slider.style.marginLeft = "unset";
  range.value = 0;

});

ButtonAfter.addEventListener("click", function (evt) {
  sliderAfter.style.width = "100%";
  sliderBefore.style.width = "0%";
  slider.style.marginLeft = "auto";
  range.value = 100;
  
});

range.oninput = function () {
  sliderAfter.style.width = range.value + "%";
  sliderBefore.style.width = 100 - range.value + "%";
  
};
