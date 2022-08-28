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
