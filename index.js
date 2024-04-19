const navSlide = () => {
    const navMenu = document.querySelector('.header .container .menu');
    const burger = document.querySelector('.header .container .burger');
    const burger1 = document.querySelector('.header .container .burger .line1');
    const burger2 = document.querySelector('.header .container .burger .line2');
    const burger3 = document.querySelector('.header .container .burger .line3');
    let navContainer = document.querySelector('.header .container');
    const before = window.getComputedStyle(navContainer, '::before');
    // console.log(before.display);
    
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('toggle');
        burger1.classList.toggle('toggle');
        burger2.classList.toggle('toggle');
        burger3.classList.toggle('toggle');
        if (burger.className.includes('toggle')) {
            navContainer.style.setProperty('--containerBefore', 'block');
        } else {
            navContainer.style.setProperty('--containerBefore', 'none');
        }
    });

    
};

navSlide();