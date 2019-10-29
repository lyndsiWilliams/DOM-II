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

const pGrab = document.querySelectorAll('p');

pGrab.forEach(e => {
    e.addEventListener("wheel", () => {
        e.style.filter = "blur(10px)";
    });
})



// let scale = 1;

// function zoom(e) {
//     // e.preventDefault();

//     scale += e.deltaY * -0.01;

//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);

//     // Apply scale transform
//     pGrab.style.transform = `scale(${scale})`;
// }


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