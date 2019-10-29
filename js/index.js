// Your code goes here

// mouseover
const imgGrab = document.querySelectorAll('img');

imgGrab.forEach(e => {
    e.addEventListener("mouseenter", () => {
        e.style.filter = "invert(100%)";
    })

    e.addEventListener("mouseleave", () => {
        e.style.filter = "invert(0%)";
    })
})


// keydown
const bodyGrab = document.querySelector('body');

bodyGrab.addEventListener("keydown", () => {
    bodyGrab.style.backgroundColor = "lightblue";
})


// wheel


// drag / drop


// load


// focus


// resize


// scroll


// select


// dblclick
const h2Grab = document.querySelectorAll('h2');

h2Grab.forEach(e => {
    e.addEventListener("dblclick", () => {
        e.textContent = "DON'T DOUBLE CLICK ME!!!";
    })
})