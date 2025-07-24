const navbar = document.querySelector('.navbar');

function updateNavbarState() {
    if (window.scrollY === 0) {
        navbar.classList.remove('hidden');
        navbar.classList.add('always-show');

    } else {
        navbar.classList.remove('always-show');

        if (!navbar.matches(':hover')) {
            navbar.classList.add('hidden');
        }
    }
}

window.addEventListener('scroll', updateNavbarState);
navbar.addEventListener('mouseenter', () => navbar.classList.remove('hidden'));
navbar.addEventListener('mouseleave', updateNavbarState);

updateNavbarState();
