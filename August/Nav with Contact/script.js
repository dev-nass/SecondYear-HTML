const headerLogo = document.querySelector('.header__logo');
const headerBtn = document.querySelector('.header__btn');
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const logoNav = document.querySelector('.logo__nav');

headerBtn.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger');
  hamburger.classList.toggle('hamburger__toggle');
  headerLogo.classList.toggle('logo__nav');
  logoNav.classList.toggle('logo--moved');
  // headerBtn.classList.toggle('btn__animation');
  navBar.classList.toggle('nav--on');
});