// Toggle Class Active Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu-bars').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Mengilangkan side bar diluar area side bar
const menu = document.querySelector('#menu-bars');
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
