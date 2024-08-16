const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav');

toggleBtn.addEventListener('click', function() {
  navLinks.classList.toggle('nav--show');
})