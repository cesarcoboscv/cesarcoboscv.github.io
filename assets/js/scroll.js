var navBar = document.getElementById("navbar");
var resumebtn = document.getElementById("resumebtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 80) {
        navBar.classList.remove("bg-[#141E30]");
        navBar.classList.add("bg-slate-900");
        navBar.classList.add("text-white");
        
        // resumebtn.style.visibility = "hidden";
    } else {
        navBar.classList.remove("bg-slate-900");
        navBar.classList.add("bg-[#141E30]");
        navBar.classList.remove("text-white");
        // resumebtn.style.visibility = "visible";

    }
}
