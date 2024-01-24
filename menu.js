
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

const scrollers = document.querySelectorAll(".logos");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".logos-slide");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }