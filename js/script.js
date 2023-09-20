// елементи з html

const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');

// кнопка відкриття меню
btn.addEventListener('click', openMenu);

// функція для відкриття меню
function openMenu() {
  // добавляє класи до елементів
  menu.classList.toggle('menu__list_show');
  btn.classList.toggle('menu__btn_active');
}
