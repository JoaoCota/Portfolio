/* Abre e fecha menu lateral em modo mobile */

const __menuMobile = document.querySelector('.menu-mobile');
const __body = document.querySelector('body');

__menuMobile.addEventListener('click', () => {
    __menuMobile.classList.contains("bi-list")
        ? __menuMobile.classList.replace("bi-list", "bi-x")
        : __menuMobile.classList.replace("bi-x", "bi-list");
    __body.classList.toggle("menu-nav-active")
});

/* Fecha o menu quando clicar em algum item e muda o ícone para list */
const __navItem = document.querySelectorAll('.nav-item');

__navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (__body.classList.contains("menu-nav-active")) {
            __body.classList.remove("menu-nav-active");
            __menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});
