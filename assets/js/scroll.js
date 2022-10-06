var navBar = document.getElementById("navbar");
var resumebtn = document.getElementById("resumebtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 80) {
        navBar.style.backgroundColor="#1e293b";
        navBar.style.opacity=".95";
        navBar.classList.add("text-white");
    } else {
        navBar.style.backgroundColor="transparent";
        navBar.classList.remove("text-white");
    }
}


