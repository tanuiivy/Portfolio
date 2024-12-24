// Dark mode toggle
document.getElementById('toggle-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Toggle icon between moon and sun
    const icon = document.querySelector('#toggle-switch i');
    if (document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
    } else {
        icon.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
    }
});

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('responsive');
}

