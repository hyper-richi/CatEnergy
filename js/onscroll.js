let upButton = document.querySelector('.up-button');

  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      upButton.classList.add('shown');
    } else {
      upButton.classList.remove('shown');
    }
  };

  upButton.onclick = function (evt) {
      evt.preventDefault();
      scroll({ top: 0, behavior: 'smooth' });
    //scroll-behavior - CSS свойство, которое определяет поведение прокрутки для любого элемента на странице.
  }