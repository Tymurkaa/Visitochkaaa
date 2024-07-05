
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.header_btn')
button.addEventListener('click', scrollDown)

anime({
    targets: '.header_btn',
    translateY: [-window.innerHeight / 2, 0],
    duration: 300,
    easing: 'easeOutQuad'
})