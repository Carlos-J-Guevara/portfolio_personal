"use strict";
// Function to initialize the mobile menu behavior
// first menu at head
const initMobileMenu = () => {
    // Get the menu element by its ID. It can be null if not found.
    const menuNavigation = document.getElementById('menuDesplegable');
    // Get the menu icon element by its ID. It can be null if not found.
    const menuIcon = document.getElementById('iconoMenu');
    // Check if both elements exist to avoid runtime errors
    if (!menuNavigation || !menuIcon) {
        console.warn('Menu elements not found. Please verify that the IDs are correct.');
        return;
    }
    if (window.innerWidth <= 600) {
        menuIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            menuNavigation.style.display = 'flex';
        });
        menuNavigation.addEventListener('click', () => {
            menuNavigation.style.display = 'none';
        });
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!menuNavigation.contains(target) && !menuIcon.contains(target)) {
                menuNavigation.style.display = 'none';
            }
        });
    }
};
// icon menu projects second menu at projects section
const initMobileMenuProjects = () => {
    // Get the menu element by its ID. It can be null if not found.
    const menuNavigationProjects = document.getElementById('dropDownMenuProjects');
    // Get the menu icon element by its ID. It can be null if not found.
    const menuIconProjects = document.getElementById('iconoMenuProjects');
    // Check if both elements exist to avoid runtime errors
    if (!menuNavigationProjects || !menuIconProjects) {
        console.warn('Menu elements not found. Please verify that the IDs are correct.');
        return;
    }
    if (window.innerWidth <= 600) {
        menuIconProjects.addEventListener('click', (event) => {
            event.stopPropagation();
            menuNavigationProjects.style.display = 'flex';
        });
        menuNavigationProjects.addEventListener('click', () => {
            menuNavigationProjects.style.display = 'none';
        });
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!menuNavigationProjects.contains(target) &&
                !menuIconProjects.contains(target)) {
                menuNavigationProjects.style.display = 'none';
            }
        });
    }
};
// Wait for the DOM to be fully loaded before running our script
window.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initMobileMenuProjects();
});
