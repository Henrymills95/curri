// Scroll
const nav = document.querySelector('.nav')
const navHeight = nav.getBoundingClientRect().height
window.addEventListener('scroll', () => {
    const navScrool = window.pageYOffset
    if(navHeight < navScrool){
        nav.classList.add('fix-nav')
    }else{
        nav.classList.remove('fix-nav')
    }
})


// Menu
const menu = document.querySelector('.manu')
const leftMenu = menu.getBoundingClientRect().left
const humBurger = document.querySelector('.humburger')
const closeMenu = document.querySelector('.close')
const body = document.querySelector('body')
humBurger.addEventListener('click', () => {
    if(leftMenu < 0){
        menu.classList.add('show')
        body.classList.add('show')
        nav.classList.add('show')
    }
})
closeMenu.addEventListener('click', () => {
    if(leftMenu <= 0){
        menu.classList.remove('show')
        body.classList.remove('show')
        nav.classList.remove('show')
    }
})

const Change = () => {
        menu.classList.remove('show')
        body.classList.remove('show')
        nav.classList.remove('show')
}

// Control Wedget
const widget = document.querySelector('.widget')
const Control = document.querySelector('.control')
widget.addEventListener('click', () => {
    Control.classList.toggle('open')
})

const colors = document.querySelectorAll('.colors span')

colors.forEach(item => {
    item.addEventListener('click', () => {
        const currentColor = item.dataset.id
        document.querySelector(':root').style.setProperty('--customColor', currentColor)
    })
});
window.addEventListener('scroll', () => {
    Control.classList.remove('open')
})

const links = [...document.querySelectorAll('.scroll-link')]
links.map((link) => {
   link.addEventListener('click', (e) => {
//    e.preventDefault()
  
})
})


const config = {
    type: 'carousel',
    perView: 3,
    autoplay: 2000,
    hoverpause: true,
    animationTimingFunc: 'linear',
    gap: 30,
    breakpoints: {
        996: {
            perView: 2,
        },
        768: {
            perView: 1,
        },
    }
}

new Glide('.glide', config).mount()

// Typelt
new TypeIt("#type", {
    speed: 120,
    loop: true,
  })
  .type("Designer", {delay: 600})
  .delete(10, {delay: 600})
  .type('Developer')
  .go();

// Typelt
new TypeIt("#type1", {
    speed: 120,
    loop: true,
  })
  .type("Designer", {delay: 600})
  .delete(10, {delay: 600})
  .type('Developer')
  .go();

//   AOS
AOS.init();
// GSAP
gsap.from('.logo', {opacity: 0, duration: 1, delay: 1, y: -10});
gsap.from('.namburger', {opacity: 0, duration: 1, delay: 0.8, x: 20});
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.1, x: -200});
gsap.from('.hero h3', {opacity: 0, duration: 1, delay: 1.4, x: -50});
gsap.from('.hero h1', {opacity: 0, duration: 1, delay: 1.7, x: -45});
gsap.from('.hero h4', {opacity: 0, duration: 1, delay: 2.1, y: -30});
gsap.from('.hero a', {opacity: 0, duration: 1, delay: 2.4, y: -30});

gsap.from('.nav-item', {
    opacity: 0, 
    duration: 1, 
    delay: 1, 
    y: 30, 
    stagger: 0.2});

gsap.from('.icons span', {
    opacity: 0,
    duration: 1,
    delay: 2.5,
    x: -30,
    stagger: 0.2,

})


