
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

// Skills carousel logic
const scrollers = document.querySelectorAll(".logos");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
  
      const scrollerInner = scroller.querySelector(".logos-slide");
      const scrollerContent = Array.from(scrollerInner.children);
  
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
}
// End Skills carousel logic

// Projects observer logic

var imgPorts = document.querySelectorAll('.img-port');

imgPorts.forEach(function(imgPort) {
    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            imgPort.classList.add('animate');
        } else {
            imgPort.classList.remove('animate');
        }
    }, { threshold: 0.7 });

    observer.observe(imgPort);
});