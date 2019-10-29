// Your code goes here

// mouseover
const imgGrab = document.querySelectorAll('img');

imgGrab.forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.filter = "invert(100%)";
    })

    el.addEventListener("mouseleave", () => {
        el.style.filter = "invert(0%)";
    })
})


// keydown


// wheel


// drag / drop


// load


// focus


// resize


// scroll


// select


// dblclick