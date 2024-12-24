document.getElementById('toggle-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

document.querySelector('.menu-button').addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('responsive');
});
