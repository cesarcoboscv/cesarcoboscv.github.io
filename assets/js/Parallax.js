// Background Parallax effect
var bg = document.getElementById("back")
var port = document.getElementById("portrait")
// Parallax Efect

window.addEventListener("scroll", function () { 
    var con= window.scrollY
    bg.style.backgroundPosition= '0px '+  ((con * -.1 )  + 'px');
})

// Background mouse movement efect
document.addEventListener('mousemove', mouse_position, false)
function mouse_position()
{
    var e = window.event;
    posX = e.clientX;
    posY = e.clientY;
    bg.style.backgroundPosition= (posX * -.1) + 'px ' + (posY*-.1) + 'px';
}