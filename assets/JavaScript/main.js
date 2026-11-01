const smallCircle = document.getElementById("smallCircle")
const largeCircle = document.getElementById("largeCircle")

let x, y

addEventListener("mousemove", (e)=> {
    x = e.clientX
    y = e.clientY

    smallCircle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    largeCircle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
})