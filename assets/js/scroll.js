var navBar = document.getElementById("navbar");
var resumebtn = document.getElementById("resumebtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 80) {
        navBar.style.backgroundColor="#1e293b";
        navBar.classList.add("text-white");
    } else {
        navBar.style.backgroundColor="#141E30";
        navBar.classList.remove("text-white");
    }
}
