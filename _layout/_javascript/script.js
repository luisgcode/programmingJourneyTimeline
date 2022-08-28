'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const items = document.querySelectorAll('.item');

window.addEventListener('scroll', checkItems);

checkItems();

function checkItems() {
  const trigger = (window.innerHeight / 4) * 4;
  items.forEach(function (item) {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < trigger) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

const btnUp = document.getElementById('button-up');

btnUp.addEventListener('click', scrollUp);

function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 200) {
    btnUp.style.transform = 'scale(1)';
  } else if (scroll < 200) {
    btnUp.style.transform = 'scale(0)';
  }
};
