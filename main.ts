// menu of view in phone which appears when the user clicks on the icon of the menu.

// DOM:
const menuNavegation: HTMLElement = document.getElementById(
  'menuDesplegable'
) as HTMLElement;
const menuIcono: HTMLElement = document.getElementById(
  'iconoMenu'
) as HTMLElement;

// Menu State
let isMenuOpen: boolean = false;

// Toggle menu function
const toggleMenu = (): void => {
  isMenuOpen = !isMenuOpen;
  menuNavegation.style.display = isMenuOpen ? 'flex' : 'none';
};

// Mobile menu handler
const initMobileMenu = (): void => {
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
