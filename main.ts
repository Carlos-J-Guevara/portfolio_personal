// menu of view in phone which appears when the user clicks on the icon of the menu.

// DOM:

const menuNavegation: HTMLMenuElement = document.getElementById(
  'menuDesplegable'
) as HTMLMenuElement;
const menuIcono: HTMLImageElement = document.getElementById(
  'iconoMenu'
) as HTMLImageElement;

// LOGIC:
menuIcono.addEventListener('click', () => {
  menuNavegation.style.display = 'flex';
});

menuNavegation.addEventListener('click', () => {
  menuNavegation.style.display = 'none';
});
