"use strict";
// menu of view in phone which appears when the user clicks on the icon of the menu.
// DOM:
const menuNavegation = document.getElementById('menuDesplegable');
const menuIcono = document.getElementById('iconoMenu');
// Menu State
let isMenuOpen = false;
// Toggle menu function
const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    menuNavegation.style.display = isMenuOpen ? 'flex' : 'none';
};
// Mobile menu handler
const initMobileMenu = () => {
    if (window.innerWidth <= 600) {
        // Remove existing listeners to prevent duplicates
        menuIcono.removeEventListener('click', toggleMenu);
        menuNavegation.removeEventListener('click', toggleMenu);
        // Add new listeners
        menuIcono.addEventListener('click', toggleMenu);
        menuNavegation.addEventListener('click', toggleMenu);
    }
};
// Initialize
initMobileMenu();
// Listen for window resize
window.addEventListener('resize', initMobileMenu);
