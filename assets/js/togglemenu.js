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



    const expandButton = document.querySelector('.expand');
    const expandToggle =()=>{
    const expandedContent = document.querySelector('.expanded');

        
        expandedContent.classList.toggle('hidden');
    }

    expandButton.addEventListener('click', expandToggle);


    /* EXPAND BUTTON 2 */
    const expandButton2 = document.querySelector('.expand2');
    const expandToggle2 =()=>{
    const expandedContent2 = document.querySelector('.expanded2');

        
        expandedContent2.classList.toggle('hidden');
    }
    

    expandButton2.addEventListener('click', expandToggle2);


    /* EXPAND BUTTON 3 */
    const expandButton3 = document.querySelector('.expand3');
    const expandToggle3 =()=>{
    const expandedContent3 = document.querySelector('.expanded3');

        
        expandedContent3.classList.toggle('hidden');
    }
    

    expandButton3.addEventListener('click', expandToggle3);
