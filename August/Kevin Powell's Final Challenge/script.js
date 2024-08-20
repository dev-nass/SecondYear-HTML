const btnReceiver = document.querySelector('.header__btn');
const navReceiver = document.querySelector('.nav');

btnReceiver.addEventListener('click', function() {
  navReceiver.classList.toggle('nav--on');
});