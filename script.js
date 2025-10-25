const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    let scrollPosition = window.scrollY + 150;
    let currentSectionId = '';

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;

        if(scrollPosition>=sectionTop && scrollPosition< sectionTop + sectionHeight){
            currentSectionId = section.id;
        }
    })


    navlinks.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${currentSectionId}`){
            link.classList.add('active');
        }
       
    })

    if (window.innerWidth<600) {
        navbar.classList.remove('visible');
        menubar.classList = 'bx bx-menu-alt-right';
    }

}


const menubar = document.querySelector('.bx-menu-alt-right');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
    if (menubar.classList == 'bx bx-menu-alt-right') {
        menubar.classList = 'bx bx-x';
    }else{
        menubar.classList = 'bx bx-menu-alt-right';
    }

    navbar.classList.toggle('visible');

})


