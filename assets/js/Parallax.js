// Background Parallax effect
let bg = document.getElementById("back")
let port = document.getElementById("portrait")
// Parallax Efect

window.addEventListener("scroll", function () { 
    let con= window.scrollY
    bg.style.backgroundPosition= '0px '+  ((con * -.1 )  + 'px');
})

// Background mouse movement efect
document.addEventListener('mousemove', mouse_position, false)
function mouse_position()
{
    let e = window.event;
    posX = e.clientX;
    posY = e.clientY;
    bg.style.backgroundPosition= (posX * -.1) + 'px ' + (posY*-.1) + 'px';
}