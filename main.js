'use strict';

const hun = document.querySelector('.hunbarger');
const ul = document.querySelector('.ul_p');
const li = document.querySelectorAll('.li_c');

hun.addEventListener('click', () => {
    ul.classList.toggle('open');
});