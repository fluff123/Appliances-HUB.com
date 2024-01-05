
function scrollToAbout() {
    const aboutSection = document.getElementById('ABOUT');
    const windowHeight = window.innerHeight;
    const sectionHeight = aboutSection.offsetHeight;

  
    const scrollToY = aboutSection.offsetTop - (windowHeight - sectionHeight) / 2;

    
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


const aboutLink = document.querySelector('a[href="#About"]');
aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToAbout();
});

 function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;

    
    const scrollToY = section.offsetTop - (windowHeight - sectionHeight) / 2;

 
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
     
        header.style.top = '0';
    } else {
     
        header.style.top = `-${header.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', function () {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    const aboutLink = document.querySelector('a[href="#About"]');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        scrollToSection('ABOUT');
    });
    
    const productsLink = document.querySelector('a[href="#Products"]');
    productsLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        scrollToSection('Product'); // Change to 'Product' to match the section ID
    });
});
