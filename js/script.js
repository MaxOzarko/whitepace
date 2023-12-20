const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.modal');
const closeButton = document.querySelector('dialog button');

btn.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.toggle('menu__list_show');
  btn.classList.toggle('menu__btn_active');
}

showButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
