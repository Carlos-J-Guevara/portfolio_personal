// Function to initialize the mobile menu behavior
const initMobileMenu = (): void => {
  // Get the menu element by its ID. It can be null if not found.
  const menuNavigation = document.getElementById(
    'menuDesplegable'
  ) as HTMLMenuElement | null;

  // Get the menu icon element by its ID. It can be null if not found.
  const menuIcon = document.getElementById(
    'iconoMenu'
  ) as HTMLImageElement | null;

  // Check if both elements exist to avoid runtime errors
  if (!menuNavigation || !menuIcon) {
    console.warn(
      'Menu elements not found. Please verify that the IDs are correct.'
    );
    return;
  }

  // Check if the window width is less than or equal to 600 pixels (mobile devices)
  if (window.innerWidth <= 600) {
    // When the menu icon is clicked, display the navigation menu with flex layout
    menuIcon.addEventListener('click', () => {
      menuNavigation.style.display = 'flex';
    });

    // When the navigation menu is clicked, hide it
    menuNavigation.addEventListener('click', () => {
      menuNavigation.style.display = 'none';
    });
  }
};

// Wait for the DOM to be fully loaded before running our script
window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});
