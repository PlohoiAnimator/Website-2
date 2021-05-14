const menu = document.querySelector("#mobile-menu");
const menuList = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

function mobileMenu() {
    menu.classList.toggle("is-active");
    menuList.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const navNavigator = () => {
    const elem = document.querySelector(".highlight");
    const homePage = document.querySelector("#home-page");
    const aboutPage = document.querySelector("#about-page");
    const servicesPage = document.querySelector("#services-page");
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if ( window.innerWidth > 960 && scrollPos < 700) {
        homePage.classList.add("highlight");
        aboutPage.classList.remove("highlight");
        return
    } else if ( window.innerWidth > 960 && scrollPos < 1600) {
        homePage.classList.remove("highlight");
        aboutPage.classList.add("highlight");
        servicesPage.classList.remove("highlight");
        return
    } else if ( window.innerWidth > 960 && scrollPos < 2965) {
        aboutPage.classList.remove("highlight");
        servicesPage.classList.add("highlight");
        return
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", navNavigator);
window.addEventListener("click", navNavigator);

// Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuList.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);