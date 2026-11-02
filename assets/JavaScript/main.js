// ------- CURSOR SHAPE ------- //
const smallCircle = document.getElementById("smallCircle")
const largeCircle = document.getElementById("largeCircle")

let x, y

addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY

    smallCircle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    largeCircle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
})

// ------- INCREASING NUMBERS IN HERO ------- //
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")

let num1Cap = num1.getAttribute('data-cap')
let num2Cap = num2.getAttribute('data-cap')
let num3Cap = num3.getAttribute('data-cap')

let cap1 = 0
let cap2 = 0
let cap3 = 0

let q1 = setInterval(() => {
    cap1++
    if (cap1 <= num1Cap) num1.innerText = cap1
    else clearInterval(q1)
}, 0)
let q2 = setInterval(() => {
    cap2++
    if (cap2 <= num2Cap) num2.innerText = cap2
    else clearInterval(q2)
}, 8)
let q3 = setInterval(() => {
    cap3++
    if (cap3 <= num3Cap) num3.innerText = cap3
    else clearInterval(q3)
}, 18)

// ------- Scroll reveal -------//
const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

reveals.forEach((el) => observer.observe(el))


const gamesSwiper = new Swiper('.gamesSwiper', {

    loop: true,

    slidesPerView: 1,
    spaceBetween: 16,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    speed: 800,

    pagination: {
        el: '.gamesSwiper .swiper-pagination',
        clickable: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});

const leftIMG = document.getElementById("leftIMG")
const rightIMG = document.getElementById("rightIMG")

leftIMG.addEventListener("click", () => {
    gamesSwiper.slidePrev()
})

rightIMG.addEventListener("click", () => {
    gamesSwiper.slideNext()
})