const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBar = document.querySelector('.icon-bar');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBar.style.display = 'inline';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('tampil');
        iconBar.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}
