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



/* Animar todos os itens na tela que tiverem meu atributo data-anime */

const __item = document.querySelectorAll("[data-anime]");

const __animeScroll = () => {
    const __windowTop = window.pageYOffset + window.innerHeight * 0.85;

    __item.forEach((element) => {
        if(__windowTop > element.offsetTop){
            element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
        }
    });
};

__animeScroll();

window.addEventListener("scroll", () => {
    __animeScroll();
});


let anoAtual = new Date().getFullYear();
let idade = anoAtual-1999;
$('#abc span').text(idade);