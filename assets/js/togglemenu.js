const initApp = () =>{
    const hamburgerButton = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

    }

    hamburgerButton.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);