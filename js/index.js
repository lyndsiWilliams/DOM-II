// Your code goes here

// The Grabs
const imgGrab = document.querySelectorAll('img');
const bodyGrab = document.querySelector('body');
const pGrab = document.querySelectorAll('p');
const navGrab = document.querySelectorAll('.nav-link');
const h2Grab = document.querySelectorAll('h2');
const h4Grab = document.querySelectorAll('h4');
const btnGrab = document.querySelectorAll('.btn');

// mouseenter/mouseleave
imgGrab.forEach(e => {
    e.addEventListener("mouseenter", () => {
        e.style.filter = "invert(100%)";
    })

    e.addEventListener("mouseleave", () => {
        e.style.filter = "invert(0%)";
    })
})


// keydown
bodyGrab.addEventListener("keydown", () => {
    bodyGrab.style.backgroundColor = "lightblue";
})


// keyup
bodyGrab.addEventListener("keyup", () => {
    bodyGrab.style.backgroundColor = "lightpink";
})


// wheel
pGrab.forEach(e => {
    e.addEventListener("wheel", () => {
        e.style.filter = "blur(10px)";
    });
})


// click
btnGrab.forEach(e => {
    e.addEventListener("click", () => {
        e.style.backgroundColor = "rebeccapurple";
    })
})


// auxclick
btnGrab.forEach(e => {
    e.addEventListener("auxclick", () => {
        e.style.backgroundColor = "green";
    })
})


// load
window.addEventListener('load', (event) => {
    console.log('The page is fully loaded!');
});


// resize
window.addEventListener("resize", () => {
    imgGrab.forEach(e => {
        e.src = "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
    })
})


// scroll
window.addEventListener("scroll", () => {
    imgGrab.forEach(e => {
        e.style.filter = "drop-shadow(10px 10px)";
    })
})



// dblclick
h2Grab.forEach(e => {
    e.addEventListener("dblclick", () => {
        e.textContent = "DON'T DOUBLE CLICK ME!!!";
    })
})