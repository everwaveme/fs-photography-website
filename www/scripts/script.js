//AOS animation
AOS.init({
  once: true,
});

//Open/Close burger menu
const burger = document.querySelector('.js-header-burger');
const nav = document.querySelector('.js-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  // nav.classList.toggle('active'); // как варик, только покороче
  // body.classList.toggle('lock'); // как варик, только покороче
  if (nav.classList.contains('active') == true) {
    nav.classList.remove('active');
    body.classList.remove('lock');
  } else {
    nav.classList.add('active');
    body.classList.add('lock');
  }
});
