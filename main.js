"use strict";
// menu of view in phone which appears when the user clicks on the icon of the menu.
// DOM:
const menuNavegation = document.getElementById('menuDesplegable');
const menuIcono = document.getElementById('iconoMenu');
// LOGIC:
const initMobileMenu = () => {
    if (window.innerWidth <= 600) {
        menuIcono.addEventListener('click', () => {
            menuNavegation.style.display = 'flex';
        });
        menuNavegation.addEventListener('click', () => {
            menuNavegation.style.display = 'none';
        });
    }
};
initMobileMenu();
