
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var button = document.querySelector('.backtotop');

    if (window.pageYOffset > header.offsetHeight) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', downloadFile);

function downloadFile() {
    window.open('images/CurriculumMarcosBento.pdf');
}

