import './style.css';
import './src/style/App.scss';

('use strict');

//Menu
const menuBtnLBody = document.querySelector('.menu');
const menuBtnLIcon = document.querySelector('.menu-btn-l__icon');
const body = document.body;

if (menuBtnLBody && menuBtnLIcon) {
  menuBtnLIcon.addEventListener('click', () => {
    menuBtnLBody.classList.toggle('_active');
    menuBtnLIcon.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
  menuBtnLBody.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      menuBtnLBody.classList.remove('_active');
      menuBtnLIcon.classList.remove('_active');
      body.classList.remove('_lock');
    });
  });
}